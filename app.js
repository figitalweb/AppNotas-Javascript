// obtenemos los botones principales, agregar, editar y borrar
let btnAddNote = document.getElementById('btnAddNote'),
    btnEditNote = document.getElementById('btnEditNote'),
    btnDeleteNote = document.getElementById('btnDeleteNote');

//Evento para crear la nota
btnAddNote.addEventListener('click', createNote)

//Funcion para crear un article con sus clases y contenido
function createNote() {
    let titleNote = document.getElementById('addTitleNote').value,
        textNote = document.getElementById('addTextNote').value;
    
    let notes = {
        titleNote,
        textNote
    }

    if (localStorage.getItem('notes') == null) {
        let notesStorage = []
        notesStorage.push(notes)
        localStorage.setItem('notes', JSON.stringify(notesStorage))
        
    } else {
        let notesStorage = JSON.parse(localStorage.getItem('notes'))
        notesStorage.push(notes)
        localStorage.setItem('notes', JSON.stringify(notesStorage))
    }
    
    document.getElementById('formAddNotes').reset()
}

function noteView() {

}



