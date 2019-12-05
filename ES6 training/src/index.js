import Movie from './movie.js'

class MovieApp
{
    constructor()
    {
        function Movie(){
            // var searchInput = document.getElementById('search-input');
            // searchInput.addEventListener('input',function(event){
            //     var searchText = event.target.value;
            //     var availableMoviesRaw = localStorage.getItem('popular-movies');
            //     if(availableMoviesRaw){
            //         var availableMovies = JSON.parse(availableMoviesRaw).results;
            //         var filteredMovies = availableMovies.filter(function(_movie){
            //             return(_movie.title.toLowerCase().indexOf(searchText.toLowerCase())>-1);
            //         });
            //         if(filteredMovies.length>0){
            //             document.getElementById('renderArea').innerHTML = "";
            //             this.movieListing(filteredMovies);
    
            //         }
            //     }
            // }.bind(this))
        }
    }
    async loadPopularMovies(){
        var url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=06dcefc4c6268cb53b82f76560368636";

        const response = await fetch(url);
        console.log(response);
        if(response.ok)
        {
            var jsonData=await response.json();
            console.log(jsonData)
            localStorage.setItem('popular-movies',response)
            this.movieListing(jsonData.results);
           
        }
       else{
            console.log("error");
       }
        
        
       
    } 
    movieListing(movies){
        var totalMovies = movies.length;
        var renderArea = document.getElementById('renderArea');
        var row = document.createElement('div');
        row.className = "row";
      

        for(var i=0; i<totalMovies; i++){
            // var movieContainer = document.createElement('div');
            // movieContainer.className = "card col-md-4";
            // movieContainer.style.width = "18rem";

            // var cardBody = document.createElement('div');

            // var cardTitle = document.createElement('h5');
            // cardTitle.innerText = movies[i]["title"];

            // var cardText = document.createElement('p');
            // cardText.innerText = movies[i]["overview"];

            // var imgTag = document.createElement('img')
            // imgTag.src = "https://image.tmdb.org/t/p/w500/" + movies[i]["poster_path"];
            // imgTag.width = '100';
            // imgTag.height = '100';

            // cardBody.appendChild(cardTitle);
            // cardBody.appendChild(imgTag);
            // cardBody.appendChild(cardText);

            // movieContainer.appendChild(cardBody)
            // row.appendChild(movieContainer);
            // // movieContainer.innerText = movies[i]["title"];
            // renderArea.appendChild(row);
            let movieInstance = new Movie(movies[i]);
            renderArea.innerHTML += movieInstance.renderMovie();
        }
    }

}

var movieInstance = new MovieApp();
movieInstance.loadPopularMovies();
