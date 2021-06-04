// function Movie(Title,Director,Genre,ReleaseYear,Rating){
//     this.Title = Title;
//     this.Director = Director;
//     this.Genre = Genre;
//     this.ReleaseYear = ReleaseYear;
//     this.Rating = Rating;
// }

// Movie.prototype.movieInfo = function(){
//     return `${this.Title} , a ${this.Genre} film directed by ${this.Director} was release in ${this.ReleaseYear}. It received 
//     a rating of ${this.Rating}`;

// };

class Movie{
    constructor(Title,Director,Genre,ReleaseYear,Rating){
            this.Title = Title;
    this.Director = Director;
    this.Genre = Genre;
    this.ReleaseYear = ReleaseYear;
    this.Rating = Rating;
    }
    movieInfo(){
           return `${this.Title} , a ${this.Genre} film directed by ${this.Director} was release in ${this.ReleaseYear}. It received 
           a rating of ${this.Rating}`;
    }
}

const platoon = new Movie("platoon","tom hangs","War","1980",5);
console.log(platoon);
console.log(platoon.movieInfo());
