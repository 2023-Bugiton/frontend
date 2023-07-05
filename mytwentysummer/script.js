function addUnderline(element) {
    element.classList.add('underline');
  }
  
  function replaceImage(element) {
    var originalSrc = 'images/ph_star-bold.png'; // 원래 이미지 소스
    var newSrc = 'images/pull-star.png'; // 교체될 이미지 소스
  
    if (element.getAttribute('src') === originalSrc) {
      element.setAttribute('src', newSrc); // 이미지를 교체될 이미지로 변경
    } else {
      element.setAttribute('src', originalSrc); // 이미지를 원래 이미지로 복원
    }
  }