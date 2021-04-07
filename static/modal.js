// Get the modal
var modal = document.getElementById("Modal");

// Get the button that opens the modal
var btn = document.getElementById("BestButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  update_modal(first.movie.id);
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function update_modal(id) {
  axios.get(url+id).then( (res) => {
    console.log(res);
    let i = document.getElementsByClassName("Modal_image");
    i[0].src = res.data.image_url;
    let x = document.getElementsByClassName("Modal");
    x[0].innerHTML = res.data.title;
    x[1].innerHTML = res.data.genres;
    x[2].innerHTML = res.data.year;
    x[3].innerHTML = res.data.rated;
    x[4].innerHTML = res.data.imbd_score;
    x[5].innerHTML = res.data.directors;
    x[6].innerHTML = res.data.actors;
    x[7].innerHTML = res.data.duration;
    x[8].innerHTML = res.data.countries;
    x[9].innerHTML = res.data.votes;
    x[10].innerHTML = res.data.long_description;
  });


}