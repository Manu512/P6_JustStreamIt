let url = "http://127.0.0.1:8000/api/v1/titles/";

class TopMovie {
    constructor(url) {
        this.url = url + '?&sort_by=-imdb_score';
        this.movie = "";
    }

    Retrieve() {
        return axios.get(this.url).then((res) => {
            let data = res.data.results[0];
            let first_movie = new Movie(data.id, data.image_url, data.title);
            first_movie.retrieve_info().then(() => {
                this.movie = first_movie;
                this.Display();
            });
        });
    }

    Display() {
        let x = document.getElementsByClassName("container_image");
        let img = document.createElement("img");
        img.className = this.movie.id;
        img.src = this.movie.url_image;
        x[0].appendChild(img);

        let y = document.getElementsByClassName("container");
        let description = document.createElement("div");
        description.innerHTML = this.movie.long_description;
        description.classList = "container_description";
        y[0].appendChild(description);
    }
}

class Categorie {
    constructor(name = String) {
        this.name = name;
        this.list_movies = [];
        this.pages_number = 1;
    }

    async Information() {
        try {
            const response = await axios.get(url + '?genre=' + this.name + '&page=' + this.pages_number + '&sort_by=-imdb_score');
            console.log(response.data.next);
            this.previous = response.data.previous;
            this.next = response.data.next;
            for (let i in response.data.results) {
                let data = response.data.results[i];
                let film = new Movie(data.id, data.image_url, data.title);
                this.list_movies.push(film);
            }
            try {
                const response = await axios.get(this.next);
                for (let i = 0; i < 2; i++) {
                    let data = response.data.results[i];
                    let film = new Movie(data.id, data.image_url, data.title, data.genres);
                    this.list_movies.push(film);
                }
            } catch (error) {
                console.error(error + " Error on second scan");
            }
        } catch (error) {
            console.error(error + " Error on first scan");
        }
        this.Display();
    }

    Display() {
        for (let i = 0; i < this.list_movies.length; i++) {
            let x = document.getElementsByClassName(this.name + "-item" + (i + 1));
            let img = document.createElement("img");
            img.className = this.list_movies[i].id;
            img.src = this.list_movies[i].url_image;
            x[0].appendChild(img);
        }
    }
}

class Movie {
    constructor(id = String, url_image = String, title = String) {
        this.id = id;
        this.url_image = url_image;
        this.title = title;
    }

    retrieve_info() {
        return axios.get(url + this.id)
            .then((response) => {
                this.genres = response.data.genres
                this.imdb_score = response.data.imdb_score;
                this.actors = response.data.actors;
                this.description = response.data.description;
                this.long_description = response.data.long_description;
            });
    }

}

function modal_event() {
    let movies = document.querySelectorAll("img");
    for (let movie of movies) {
        movie.addEventListener("click", function (active) {
                update_modal(active.target.classList[0]);
                modal.style.display = "block";
            }
        );
    }
}

let Action = new Categorie("Action");
let SciFi = new Categorie("Sci-Fi");
let Adventure = new Categorie("Adventure");
let all = new Categorie("");
let first = new TopMovie(url);

Promise.all([Action.Information(), SciFi.Information(), Adventure.Information(), first.Retrieve(), all.Information()])
    .then(() => {
        modal_event();
    });
