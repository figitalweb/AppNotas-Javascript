// obtenemos los botones principales, agregar, editar y borrar
let btnAddNote = document.getElementById('btnAddNote'),
    btnEditNote = document.getElementById('btnEditNote'),
    btnDeleteNote = document.getElementById('btnDeleteNote')


//Funcion para crear un article con sus clases y contenido
let createNote = (createTitle, createText) => {
    let section = document.getElementsByClassName('notes')[0],
        article = document.createElement('article'),
        header = document.createElement('header'),
        h2 = document.createElement('h2'),
        div = document.createElement('div'),
        p = document.createElement('p'),
        Title = document.createTextNode(createTitle),
        Text = document.createTextNode(createText)

    h2.appendChild(Title)
    header.appendChild(h2)

    p.appendChild(Text)
    div.appendChild(p)

    article.appendChild(header)
    article.appendChild(div)

    article.setAttribute('class', 'note')

    return section.appendChild(article)
}


//Evento para crear la nota
btnAddNote.addEventListener('click', () => {
    let titleNote = document.getElementById('addTitleNote').value,
        textNote = document.getElementById('addTextNote').value
    
    createNote(titleNote, textNote)

    // if (document.getElementsByClassName('note').length > 0) {
        
    //     let articulos = document.getElementsByClassName('note')
    //     for (let element of articulos) {
    //         localStorage.setItem('ele', element)
    //         let getele = localStorage.getItem('ele')
    //         let v = document.getElementsByClassName('notes')[0]
    //             console.log(getele)
    //             console.log(v.append(getele))
    //     }
    // }

    // console.log(localStorage.getItem('articleStorage'))

    document.getElementById('addTitleNote').value = ""
    document.getElementById('addTextNote').value = ""
})

