
let url = "http://127.0.0.1:8000/api/v1/titles/";

class Movie{
  constructor(id=String, url_image=String, title=String, genre=Array){
    this.id = id;
    this.url_image = url_image;
    this.title = title;
    this.genre = genre;
    this.release_date = "";
    this.rate = "";
    this.imdb_score = "";
    this.realisator = "";
    this.actors = "";
    this.time = "";
    this.country = "";
    this.result = "";
    this.description = "";
  }

  retrieve_info() {
    axios.get(url + this.id)
    .then((response) =>  {
      this.url_image = response.data.image_url;
      this.title = response.data.title;
      this.genre = response.data.genres;
      this.release_date = response.data.year;
      this.rate = response.data.rated;
      this.imdb_score = response.data.imdb_score;
      this.realisator = response.data.directors;
      this.actors = response.data.actors;
      this.time = response.data.duration;
      this.country = response.data.countries;
      this.result = response.data.reviews_from_critics;
      this.description = response.data.description;
          });
}
}

let movies = [];
retrieve_cat("Action");


function retrieve_cat(genre=String){
axios.get(url + '?genre=' + genre + '&sort_by=-imdb_score')
  .then((response) => {
/*    console.log(response.data);
    console.log(response.status);*/
    for (let i in response.data.results) {
      data = response.data.results[i];
      const film =  new Movie(data.id, data.image_url, data.title, data.genres);
      movies.push(film);
//      console.log(movies[i]);
    }
    display(movies);
  });
}


function display() {
for (i = 0; i < movies.length; i++) {
  //console.log("carousel-item" + (i+1));
  var x = document.getElementsByClassName("carousel-item" + (i+1));
  //console.log(x);
  x[0].innerHTML = movies[i].title;
  var img =  document.createElement("img");
  img.src = movies[i].url_image;
  x[0].appendChild(img);
  //console.log(movies[i].title);

}
}


