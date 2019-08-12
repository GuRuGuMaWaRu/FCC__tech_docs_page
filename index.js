(function() {
  const navIcon = document.getElementById("nav-menu-icon");
  const navDrawer = document.getElementById("nav-drawer");

  navIcon.addEventListener("click", () => {
    navDrawer.classList.toggle("open");
  });
})();
