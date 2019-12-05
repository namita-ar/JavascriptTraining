class MovieBaseClass{ // export class className
    constructor(movieObj){
        this.movieData = movieObj;
        

    }
    renderMovie(){
        return `<div class="row">
        <div class = "card col-md-4">
        <div>
            <h5>${this.movieData.title}</h5>
            <p>${this.movieData.overview}</p>
        </div>
        </div>
        </div>`
    }
}
export default MovieBaseClass;