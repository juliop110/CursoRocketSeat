 axios.get('https://api.github.com/users/juliop110')
.then(function(response){ 
    console.log(response.data.avatar_url) 
} )// executa após a execuçao do request
.catch(function(error) {
    console.warn(error) 
} )// caso der erro

