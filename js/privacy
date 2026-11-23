// privacy.js - changes "View more.." to "View less.." when a card is opened
// (the opening and closing itself is done by Bootstrap collapse)

var toggleLinks = document.querySelectorAll(".policy-card a");

toggleLinks.forEach(function (link) {
  var hiddenText = link.querySelector(".visually-hidden").outerHTML; // keeps the screen reader text
  var card = link.closest(".policy-card");
  var details = document.querySelector(link.getAttribute("href"));

  details.addEventListener("show.bs.collapse", function () {
    card.classList.add("expanded");
    link.innerHTML = "View less" + hiddenText + "..";
  });

  details.addEventListener("hidden.bs.collapse", function () {
    card.classList.remove("expanded");
    link.innerHTML = "View more" + hiddenText + "..";
  });
});
