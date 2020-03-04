
let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')

function renderRepos(repos) {
    listElement.innerHTML = ''


    for (repo of repos) {
        const textElement = document.createTextNode(repo.name)
        const liElement = document.createElement('li')

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}


function renderLoading(loading) {
    listElement.innerHTML = "";

    let textElement = document.createTextNode('Carregando...');
    let loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

function renderError(loading) {
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Erro!');
    var errorElement = document.createElement('li');

    errorElement.style.color = "#F00";

    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}

function buscaGit() {
    let user = inputElement.value
    if (!user) return

    renderLoading()

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepos(response.data)
        })// executa após a execuçao do request
        .catch(function (error) {
            renderError()
        })// caso der erro

}

