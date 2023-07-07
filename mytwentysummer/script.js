function addUnderline(element) {
  element.classList.add('underline');
}

function replaceImage(element) {
  var stars = element.parentNode.parentNode.getElementsByClassName('stars');
  var index = Array.prototype.indexOf.call(stars, element.parentNode);
  

  for (var i = 0; i <= index; i++) {
    var star = stars[i].firstElementChild;
    star.src = "images/pull-star.png";
  }
  
  for (var i = index + 1; i < stars.length; i++) {
    var star = stars[i].firstElementChild;
    star.src = "images/ph_star-bold.png";
  }
}
