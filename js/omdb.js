const movies = ['Nomadland', 'Home Alone', 'Parasite'];
const api = 'a0af7f7d';

function storeOutput(data) {
    console.log(data);
    console.log(data.Title);
    let genreIcons = '';
    let genreArray = data.Genre.split(', ');
    for(let i = 0; i < genreArray.length; i++) {
        if(genreArray[i] == 'Comedy') {
            genreIcons += `<img src="comedy.png" />`;
        }
        if(genreArray[i] == 'Drama') {
            genreIcons += `<img src="drama.png" />`;
        }
        if(genreArray[i] == 'Thriller') {
            genreIcons += `<img src="thriller.png" />`;
        }
    }
    document.querySelector('#content').innerHTML += `<h1>${data.Title}</h1> ${genreIcons}`;
}

for(let i = 0; i < movies.length; i++) {
    console.log(movies.length);
    url = `http://www.omdbapi.com/?t=${movies[i]}&apikey=${api}`;
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        storeOutput(data);
    })
    .catch(function(error) {
        console.log(error);
    });
}  