$(".hamburger-menu").on("click", () => {
  $(".nav-menu").toggleClass("menu-open");
});

$(".nav-menu a").on("click", () => {
  $(".nav-menu").removeClass("menu-open");
});

// $(document).on("click", (event) => {
//   let dropdown = $(".nav-menu");
//   if (dropdown !== event.target && !dropdown.has(event.target).length) {
//     $(".nav-menu").removeClass("menu-open");
//   }
// });

// $(document).click((event) => {
//   if (!$(event.target).closest(".nav-menu").length) {
//     $(".nav-menu").removeClass("menu-open");
//   }
// });

// $(document).on("click", function (event) {
//   if (!$(event.target).closest(".nav-menu").length) {
//     // Hide the menus.
//     $(".nav-menu").removeClass("menu-open");
//   }
// });

// $(document).click(function (e) {
//   e.stopPropagation();
//   let container = $(".nav-menu");

//   if (container.has(e.target).length === 0) {
//     $(".nav-menu").toggleClass("menu-open");
//   }
// });
