window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar-container");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 110) {
    // Altere o valor para o ponto em que o container deve sumir
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
});

window.addEventListener("scroll", function () {
  const sidebar = document.getElementById("freight-bar-container");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    // Altere o valor para o ponto em que o container deve sumir
    sidebar.classList.add("hidden");
  } else {
    sidebar.classList.remove("hidden");
  }
});
