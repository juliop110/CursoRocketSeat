let minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/juliop110')
        xhr.send(null)

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject('Erro na requisição')
                }
            }
        }
    });
}

minhaPromise()
.then(function(response){ console.log(response) } )// executa após a execuçao do request
.catch(function(error) {console.warn(error) } )// caso der erro