
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
'use strict';

var MovieBaseClass = function MovieBaseClass(movieObj){
    this.movieData = movieObj;
        

};
MovieBaseClass.prototype.renderMovie = function renderMovie (){
    return ("<div class=\"row\">\n        <div class = \"card col-md-4\">\n        <div>\n            <h5>" + (this.movieData.title) + "</h5>\n            <p>" + (this.movieData.overview) + "</p>\n        </div>\n        </div>\n        </div>")
};

var Movie = /*@__PURE__*/(function (MovieBaseClass) {
    function Movie(movieObj){
        MovieBaseClass.call(this, movieObj);//call parent class constructor(instantiate the base class)
       
    }

    if ( MovieBaseClass ) Movie.__proto__ = MovieBaseClass;
    Movie.prototype = Object.create( MovieBaseClass && MovieBaseClass.prototype );
    Movie.prototype.constructor = Movie;

    return Movie;
}(MovieBaseClass));

var MovieApp = function MovieApp()
{
};
MovieApp.prototype.loadPopularMovies = async function loadPopularMovies (){
    var url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=06dcefc4c6268cb53b82f76560368636";

    var response = await fetch(url);
    console.log(response);
    if(response.ok)
    {
        var jsonData=await response.json();
        console.log(jsonData);
        localStorage.setItem('popular-movies',response);
        this.movieListing(jsonData.results);
           
    }
   else{
        console.log("error");
   }
        
        
       
}; 
MovieApp.prototype.movieListing = function movieListing (movies){
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
        var movieInstance = new Movie(movies[i]);
        renderArea.innerHTML += movieInstance.renderMovie();
    }
};

var movieInstance = new MovieApp();
movieInstance.loadPopularMovies();
