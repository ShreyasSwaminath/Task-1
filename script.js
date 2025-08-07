document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById("helloBtn");
  if (button) {
    button.addEventListener("click", function () {
      alert("Hello from JavaScript!");
    });
  }
});

