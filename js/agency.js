/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$("body").scrollspy({
  target: ".navbar-fixed-top",
});

// Closes the Responsive Menu on Menu Item Click
$(".navbar-collapse ul li a").click(function () {
  $(".navbar-toggle:visible").click();
});

$("div.modal").on("show.bs.modal", function () {
  var modal = this;
  var hash = modal.id;
  window.location.hash = hash;
  window.onhashchange = function () {
    if (!location.hash) {
      $(modal).modal("hide");
    }
  };
});

const toggle = document.getElementById("toggle-dark-mode");

// Default to dark if nothing is saved
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
toggle.checked = savedTheme === "light"; // Light toggle ON if user selected light

toggle.addEventListener("change", function () {
  const newTheme = this.checked ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
