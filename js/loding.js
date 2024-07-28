function endLoader() {
  var loader = document.querySelector('.loader');
  var fadeEffect = setInterval(function () {
      if (!loader.style.opacity) {
          loader.style.opacity = 1;
      }
      if (loader.style.opacity > 0) {
          loader.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
          loader.style.display = 'none';
      }
  }, 20);
}

window.addEventListener('load', function () {
  setTimeout(endLoader, 2000);
});