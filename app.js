// obtenemos los botones principales, agregar, editar y borrar
let btnAddNote = document.getElementById('btnAddNote'),
    btnEditNote = document.getElementById('btnEditNote'),
    btnDeleteNote = document.getElementById('btnDeleteNote');
    btnClearNote = document.getElementById('btnClearNote');

//Evento para crear la nota
btnAddNote.addEventListener('click', createNote)

// Evento para actualizar nota
btnEditNote.addEventListener('click', editNote)

// Evento para borrar nota
btnDeleteNote.addEventListener('click', deleteNote)

// Evento para Limpiar LocalStorage
btnClearNote.addEventListener('click', clearNote)

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

// Funcion para agregar nota al DOM, y agregar elementos option para editar y eliminar
function noteView() {
    let notesStorage = JSON.parse(localStorage.getItem('notes'))
    let notesContainer = document.getElementById('notes')
    let listContainer = document.getElementById('editNote')
    let listDeleteContainer = document.getElementById('deleteNote')

    notesContainer.innerHTML = ''
    listContainer.innerHTML = ''
    listDeleteContainer.innerHTML = ''

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
        listContainer.innerHTML += `<option value="${i}">${title}</option>`
        listDeleteContainer.innerHTML += `<option value="${i}">${title}</option>`
    }
}

//Función para editar notas
function editNote() {
    let indexSelect = document.getElementById('editNote').selectedOptions[0].value //guardamos indice
    let notesIndexStorage = JSON.parse(localStorage.getItem('notes'))[indexSelect] //con el indice seleccionamos la nota
    let notesGetStorage = JSON.parse(localStorage.getItem('notes')) //obtenemos todas las notas
    let optionsEdit = document.getElementById('editNote').selectedOptions[0].text //obtenemos la seleccion del usuario 


    if (notesIndexStorage.titleNote == optionsEdit) {
        let titleNote = prompt('Nuevo titulo')
        let textNote = prompt('Nuevo texto')
        
        notesUpStorage = {
            titleNote,
            textNote
        }

        notesGetStorage.splice(indexSelect, 1, notesUpStorage) // reemplazamos por los nuevos valores
        localStorage.setItem('notes', JSON.stringify(notesGetStorage))
    }

    noteView()

}

//Funcion para borrar notas
function deleteNote() {
    let indexSelect = document.getElementById('deleteNote').selectedOptions[0].value //guardamos indice
    let notesIndexStorage = JSON.parse(localStorage.getItem('notes'))[indexSelect] //con el indice seleccionamos la nota
    let notesGetStorage = JSON.parse(localStorage.getItem('notes')) //obtenemos todas las notas
    let optionsDelete = document.getElementById('deleteNote').selectedOptions[0].text //obtenemos la seleccion del usuario 


    if (notesIndexStorage.titleNote == optionsDelete) {
        notesGetStorage.splice(indexSelect, 1) // Eliminamos la nota
        localStorage.setItem('notes', JSON.stringify(notesGetStorage))
    }

    noteView()
}

//Funcion para Limpiar Localstorage
function clearNote() {
    localStorage.clear();
    
    noteView()
}

// Comprobamos si localstorage contiene algo
if (localStorage.getItem('notes') != null) {
    noteView()
}
