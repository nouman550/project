window.onload = function() {
  var carouselList = document.querySelector(".carousel-list");
  var textContainer = document.querySelector(".text-container");
  var carouselText = document.getElementById("carousel-text");

  if (typeof Flickity !== 'undefined') {
    var flkty = new Flickity(carouselList, {
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      prevNextButtons: true,
      autoPlay: 4000,
      pauseAutoPlayOnHover: true,
      pageDots: false,
      arrowShape: {
        x0: 10,
        x1: 50, y1: 40,
        x2: 70, y2: 40,
        x3: 30
      }
    });

    flkty.on('select', function () {
      var activeCell = flkty.selectedElement;

      // Remove the 'inactive' class from all cells
      flkty.cells.forEach(function (cell) {
        cell.element.classList.remove('inactive', 'active');
      });

      // Add the 'inactive' class to all cells except the active one
      flkty.cells.forEach(function (cell) {
        if (cell.element !== activeCell) {
          cell.element.classList.add('inactive');
        } else {
          cell.element.classList.add('active');
        }
      });

      var dataText;
      var imgElement = activeCell.querySelector('img');
      var videoElement = activeCell.querySelector('video');

      if (imgElement) {
        dataText = imgElement.getAttribute('alt');
      } else if (videoElement) {
        dataText = videoElement.getAttribute('data-text');
      }

      carouselText.textContent = dataText;
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Additional DOMContentLoaded logic if needed
});
