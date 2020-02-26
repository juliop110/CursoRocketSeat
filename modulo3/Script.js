let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')
let btnElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTODO() {
    listElement.innerHTML = ''


    for (todo of todos) {
        let todoElement = document.createElement('li')
        let todoText = document.createTextNode(todo)

        let linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTODO(' + pos + ') ')

        let linkText = document.createTextNode('  excluir')

        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)//colocando o text dentro do element
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    } 
}

renderTODO()

function addTODO() {
    let todoText = inputElement.value

    todos.push(todoText)
    inputElement.value = ''
    renderTODO()
    saveToStorage()

}
btnElement.onclick = addTODO


function deleteTODO(pos) {
    todos.splice(pos, 1);
    renderTODO()
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos))
}