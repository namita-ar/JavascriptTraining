(function () {
    function loadPopularMovies() {
        const xhr = new XMLHttpRequest(),
            method = "GET",
            url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=06dcefc4c6268cb53b82f76560368636";
        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                //console.log(xhr.responseText);
                var rawResponseData = xhr.responseText;
                var jsonData=JSON.parse(rawResponseData);
                movieListing(jsonData.results)
            }
        };
        xhr.send();
    }
    function movieListing(movies){
        var totalMovies=movies.length;
        var renderArea = document.getElementById('renderArea');
        var row= document.createElement('div');
        row.className="row";
        for(var i=0;i<totalMovies;i++)
        {
            var movieContainer = document.createElement('div');
            
            movieContainer.className="card col-md-4" ;
            movieContainer.style.width="18rem";

            var cardBody = document.createElement('div');

            var cardTitle = document.createElement('h5');
            cardTitle.innerText = movies[i]["title"];

            var cardText = document.createElement('p');
            cardText.innerText = movies[i]["overview"];
        
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            movieContainer.appendChild(cardBody);
            row.appendChild(movieContainer);

        
            //movieContainer.innerText = movies[i]["title"];
            renderArea.appendChild(row);
        }
    }

    loadPopularMovies();

})();