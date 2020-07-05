// obtenemos los botones principales, agregar, editar y borrar
let btnAddNote = document.getElementById('btnAddNote'),
    btnEditNote = document.getElementById('btnEditNote'),
    btnDeleteNote = document.getElementById('btnDeleteNote');

//Evento para crear la nota
btnAddNote.addEventListener('click', createNote)

//Funcion para crear un article con sus clases y contenido
function createNote(e) {
    e.preventDefault();    
    let titleNote = document.getElementById('addTitleNote').value,
        textNote = document.getElementById('addTextNote').value;
    
    let notes = {
        titleNote,
        textNote
    }

    if (localStorage.getItem('notes') === null) {
        let notesStorage = []
        notesStorage.push(notes)
        localStorage.setItem('notes', JSON.stringify(notesStorage))
        
    } else {
        let notesStorage = JSON.parse(localStorage.getItem('notes'))
        notesStorage.push(notes)
        localStorage.setItem('notes', JSON.stringify(notesStorage))
    }
    
    noteView()

    document.getElementById('formAddNotes').reset()
}

function noteView() {
    let notesStorage = JSON.parse(localStorage.getItem('notes'))
    let notesContainer = document.getElementById('notes')

    notesContainer.innerHTML = ''

    for (let i = 0; i < notesStorage.length; i++){
        let title = notesStorage[i].titleNote
        let text = notesStorage[i].textNote
            notesContainer.innerHTML += `<article class="note">
                                            <header>
                                                <h2>${title}</h2>
                                            </header>
                                            <div>
                                                <p>${text}</p>
                                            </div>
                                        </article>`        
    }
}

if (localStorage.getItem('notes') != null) {
    noteView()
}
