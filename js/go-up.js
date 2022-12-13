document.getElementById("go-up-button").addEventListener("click", function () {
  window.scrollTo(0, 0);
});

document
  .getElementById("go-back-button")
  .addEventListener("click", function () {
    window.history.back();
  });
