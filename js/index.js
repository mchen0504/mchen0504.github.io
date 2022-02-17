$(".hamburger-menu").on("click", () => {
  $(".nav-menu").toggleClass("menu-open");
});

$(".nav-menu a").on("click", () => {
  $(".nav-menu").removeClass("menu-open");
});
