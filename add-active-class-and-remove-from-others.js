document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll('.sdg-items');

  boxes.forEach(box => {
    box.addEventListener('click', function() {
      boxes.forEach(otherBox => {
        otherBox.classList.remove('clicked');
      });
      this.classList.add('clicked');
    });
  });
});
