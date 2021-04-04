let url = "http://127.0.0.1:8000/api/v1/titles/";


class Categorie{
  constructor(name=String) {
    this.name = name;
    this.list_movies = [];
    this.pages_number = 1;
  }

    async Information(){
      try {
        const response = await axios.get(url + '?genre=' + this.name + '&page=' + this.pages_number + '&sort_by=-imdb_score');
        console.log(response.data.next);
        this.previous = response.data.previous;
        this.next = response.data.next;
        for (let i in response.data.results) {
          let data = response.data.results[i];
          let film = new Movie(data.id, data.image_url, data.title, data.genres);
          this.list_movies.push(film);
        }
        try {
          const response = await axios.get(this.next);
            for (let i = 0; i < 2; i++){
              let data = response.data.results[i];
              let film = new Movie(data.id, data.image_url, data.title, data.genres);
              this.list_movies.push(film);
            }
        }
        catch (error){
          console.error(error + " Error on second scan");
        }

      }
      catch (error) {
        console.error(error + " Error on first scan");
      }

      this.Display();

      }

    Display() {
    for (let i = 0; i < this.list_movies.length; i++) {
      let x = document.getElementsByClassName(this.name + "-item" + (i + 1));
      let img = document.createElement("img");

      // x[0].appendChild(a) = url + this.list_movies[i].id;
      img.src = this.list_movies[i].url_image;
      x[0].appendChild(img);
    }
  }

}

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

let categorie = ["", "Adventure", "Sci-Fi", "Action"];
let Action = new Categorie("Action");
let SciFi = new  Categorie("Sci-Fi");
let Adventure = new Categorie("Adventure");
let all = new Categorie("");

Action.Information();
SciFi.Information();
Adventure.Information();
all.Information();


