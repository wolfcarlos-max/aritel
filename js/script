// script.js - runs on every page
// 1) cart number in the navbar  2) menu button on phones  3) product slider on the home page


// ---------- CART ----------
// the cart is saved in localStorage so the number stays when we go to another page
var cart = JSON.parse(localStorage.getItem("cart")) || [];

function getCartCount() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].qty;
  }
  return total;
}

function updateCartCount() {
  var count = getCartCount();
  var badge = document.getElementById("cart-count");
  var cartLink = document.getElementById("cart-link");

  badge.textContent = count;
  if (count === 0) {
    badge.hidden = true;
    cartLink.setAttribute("aria-label", "Cart, empty. Shop our t-shirts");
  } else {
    badge.hidden = false;
    cartLink.setAttribute("aria-label", "Cart, " + count + " items. Shop our t-shirts");
  }
}

// called by the Add to Cart button on the product pages
function addToCart(item) {
  // if the same shirt (same color and size) is already in the cart, just add to its quantity
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === item.id && cart[i].color === item.color && cart[i].size === item.size) {
      cart[i].qty = cart[i].qty + item.qty;
      found = true;
    }
  }
  if (found === false) {
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  return getCartCount();
}

updateCartCount();


// ---------- MENU BUTTON (phones) ----------
var menuButton = document.querySelector(".nav-toggle");
var menu = document.getElementById("nav-menu");

menuButton.addEventListener("click", function () {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  } else {
    menu.classList.add("open");
    menuButton.setAttribute("aria-expanded", "true");
  }
});

// pressing Esc closes the menu
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && menu.classList.contains("open")) {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
  }
});


// ---------- PRODUCT SLIDER (home page only) ----------
var track = document.getElementById("product-track");

if (track) {
  var cards = track.querySelectorAll(".product-card");
  var dots = document.querySelectorAll(".dots span");
  var prevButton = document.querySelector(".arrow-prev");
  var nextButton = document.querySelector(".arrow-next");
  var message = document.getElementById("carousel-status");

  // spot of each card: 0 = left, 1 = middle (big), 2 = right
  var spots = [0, 1, 2];
  var spotNames = ["left", "center", "right"];

  function showCards() {
    for (var i = 0; i < cards.length; i++) {
      cards[i].setAttribute("data-pos", spotNames[spots[i]]);
    }
    // the dark dot = the card that is in the middle
    var middle = spots.indexOf(1);
    for (var j = 0; j < dots.length; j++) {
      if (j === middle) {
        dots[j].classList.add("active");
      } else {
        dots[j].classList.remove("active");
      }
    }
    return middle;
  }

  // direction 1 = next, -1 = back. Every card moves one spot.
  function moveCards(direction) {
    for (var i = 0; i < spots.length; i++) {
      spots[i] = (spots[i] + direction + 3) % 3;
    }
    var middle = showCards();
    message.textContent = "Featured: " + cards[middle].querySelector("h3").textContent;
  }

  // on phones the cards are a swipe strip, so the arrows just scroll it
  function slide(direction) {
    if (window.innerWidth <= 800) {
      var cardWidth = cards[0].getBoundingClientRect().width + 16;
      track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    } else {
      moveCards(direction);
    }
  }

  nextButton.addEventListener("click", function () {
    slide(1);
  });
  prevButton.addEventListener("click", function () {
    slide(-1);
  });

  showCards();
}
