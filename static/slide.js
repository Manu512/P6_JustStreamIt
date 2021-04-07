var slideIndex = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["BestMovies", "Aventures", "SciFi", "Action"]


function plusSlides(n, no) {
    if (n > 0) {
        if (slideIndex[no][0] < slideIndex[no].length) {
            for (i = 0; i < slideIndex[no].length; i++) {
                slideIndex[no][i]++;
            }
        }
    }
    if (n < 0) {
        if (slideIndex[no][0] > 1) {
            for (i = 0; i < slideIndex[no].length; i++) {
                slideIndex[no][i]--;
            }
        }
    }
    showSlides(slideIndex[no],no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementById(slideId[no]).getElementsByTagName("div");

  for (i=0; i < x.length; i++) {
      if (n.includes(i+1)) {
          x[i].style.display = "flex";
      } else {
          x[i].style.display = "none";
      }
  }
}