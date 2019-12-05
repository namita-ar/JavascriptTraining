import MovieBaseClass from './movie_base_class.js'
class Movie extends MovieBaseClass {
    constructor(movieObj){
        super(movieObj);//call parent class constructor(instantiate the base class)
       
    }
}
export default Movie;