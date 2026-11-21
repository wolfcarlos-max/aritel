// SELECT PRODUCT COLOR
const colorButtons = document.querySelectorAll(".color-circle");

let selectedColor = "";

colorButtons.forEach(button => {
    button.addEventListener("click", function () {

        colorButtons.forEach(color => {
            color.classList.remove("selected");
            color.setAttribute("aria-pressed", "false");
        });

        this.classList.add("selected");
        this.setAttribute("aria-pressed", "true");

        selectedColor = this.dataset.color;
    });
});


// SELECT PRODUCT SIZE
const sizeButtons = document.querySelectorAll(".size-btn");

let selectedSize = "";

sizeButtons.forEach(button => {
    button.addEventListener("click", function () {

        sizeButtons.forEach(size => {
            size.classList.remove("selected");
        });

        this.classList.add("selected");

        selectedSize = this.dataset.size;
    });
});


// CHANGE QUANTITY
const quantityDisplay = document.getElementById("quantity");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");

let quantity = 1;

// INCREASE QUANTITY
increaseButton.addEventListener("click", function () {
    quantity++;
    quantityDisplay.textContent = quantity;
});

// DECREASE QUANTITY
decreaseButton.addEventListener("click", function () {
    if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
});


// ORDER NOW
const orderButton = document.getElementById("orderNow");

orderButton.addEventListener("click", function () {

    // Check if the customer selected a color and size
    if (selectedColor === "" || selectedSize === "") {
        alert("Please select a color and size before ordering.");
        return;
    }

    // Product information
const productName = document.getElementById("product-name").textContent.trim();
    const productPrice = 499;
    const totalPrice = productPrice * quantity;

    // Store email address
    const recipient = "yourstore@email.com";

    // Email subject
    const subject = `Order Request - ${productName}`;

    // Email content
    const body = `
Hello ARITEL!

I would like to place an order with the following details:

Product: ${productName}
Color: ${selectedColor}
Size: ${selectedSize}
Quantity: ${quantity}

Price per item: PHP ${productPrice}
Total Price: PHP ${totalPrice}

Thank you!
    `;

    // Create email link
    const emailLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the customer's email application
    window.location.href = emailLink;
});