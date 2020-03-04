 axios.get('https://api.github.com/users/juliop110/repos')
.then(function(response){ 
    console.log(response.data.avatar) 
} )// executa após a execuçao do request
.catch(function(error) {
    console.warn(error) 
} )// caso der erro

