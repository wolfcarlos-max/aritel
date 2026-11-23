// product-page.js - color, size, quantity, Add to Cart and Order Now on the product pages

// each product page has <body data-product="product1"> so we know which shirt it is
var productId = document.body.getAttribute("data-product");
var product = products[productId];

var selectedColor = "";
var selectedSize = "";
var quantity = 1;

var message = document.getElementById("order-message");
var quantityText = document.getElementById("quantity");
var mainImage = document.getElementById("product-image");

// put the name, price and image of this product on the page
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-price").textContent = "₱ " + product.price;
mainImage.src = product.image;
mainImage.alt = product.alt;


// ---------- choose a color ----------
var colorButtons = document.querySelectorAll(".color-circle");

colorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    colorButtons.forEach(function (b) {
      b.classList.remove("selected");
      b.setAttribute("aria-pressed", "false");
    });
    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");
    selectedColor = button.dataset.color;
    message.textContent = "";
  });
});


// ---------- choose a size ----------
var sizeButtons = document.querySelectorAll(".size-btn");

sizeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    sizeButtons.forEach(function (b) {
      b.classList.remove("selected");
      b.setAttribute("aria-pressed", "false");
    });
    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");
    selectedSize = button.dataset.size;
    message.textContent = "";
  });
});


// ---------- quantity (1 to 10) ----------
document.getElementById("increase").addEventListener("click", function () {
  if (quantity < 10) {
    quantity++;
    quantityText.textContent = quantity;
  }
});

document.getElementById("decrease").addEventListener("click", function () {
  if (quantity > 1) {
    quantity--;
    quantityText.textContent = quantity;
  }
});


// ---------- small pictures change the big picture ----------
var thumbnails = document.querySelectorAll(".gallery-image");

thumbnails.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    thumbnails.forEach(function (t) {
      t.classList.remove("active");
      t.setAttribute("aria-pressed", "false");
    });
    thumb.classList.add("active");
    thumb.setAttribute("aria-pressed", "true");
    mainImage.src = thumb.dataset.image;
    mainImage.alt = thumb.dataset.alt;
  });
});


// shows a message under the buttons (red if it is an error)
function showMessage(text, isError) {
  message.textContent = text;
  if (isError) {
    message.classList.add("error");
  } else {
    message.classList.remove("error");
  }
}

// checks that a color and a size were chosen, returns true if ok
function optionsAreChosen(action) {
  if (selectedColor === "" && selectedSize === "") {
    showMessage("Please choose a color and a size before " + action + ".", true);
    return false;
  }
  if (selectedColor === "") {
    showMessage("Please choose a color before " + action + ".", true);
    return false;
  }
  if (selectedSize === "") {
    showMessage("Please choose a size before " + action + ".", true);
    return false;
  }
  return true;
}


// ---------- Add to Cart ----------
document.getElementById("addToCart").addEventListener("click", function () {
  if (optionsAreChosen("adding to cart") === false) {
    return;
  }

  var itemsInCart = addToCart({
    id: productId,
    name: product.name,
    price: product.price,
    color: selectedColor,
    size: selectedSize,
    qty: quantity
  });

  showMessage("Added to cart: " + product.name + " (" + selectedColor + ", " + selectedSize + ") x " + quantity + ". Your cart now has " + itemsInCart + " item(s).", false);
});


// ---------- Order Now (opens the email app) ----------
document.getElementById("orderNow").addEventListener("click", function () {
  if (optionsAreChosen("ordering") === false) {
    return;
  }

  var total = product.price * quantity;
  var subject = "T-Shirt Order: " + product.name;
  var body =
    "Hello Aritel,\n\n" +
    "I would like to order:\n\n" +
    "Product: " + product.name + "\n" +
    "Price: PHP " + product.price + "\n" +
    "Color: " + selectedColor + "\n" +
    "Size: " + selectedSize + "\n" +
    "Quantity: " + quantity + "\n" +
    "Total: PHP " + total + "\n\n" +
    "Name:\n" +
    "Shipping address:\n" +
    "Contact number:\n\n" +
    "Thank you!";

  showMessage("Opening your email app... if nothing happens, email us at orders@examplewebsite142.com", false);

  window.location.href = "mailto:orders@examplewebsite142.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
});
