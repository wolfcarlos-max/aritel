const productId = document.body.dataset.product;
const product = products[productId];

if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = "₱ " + product.price;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-description").textContent = product.description;
}


function orderProduct() {

    // GET CURRENT PRODUCT INFORMATION
    const productId = document.body.dataset.product;
    const product = products[productId];

    // EMAIL INFORMATION
    const recipient = "orders@examplewebsite142.com";
    const subject = "T-Shirt Order: " + product.name;

    // EMAIL MESSAGE
    const body =
        "Hello! I would like to place an order.\n\n" +
        "Product: " + product.name + "\n" +
        "Price: ₱ " + product.price + "\n\n" +
        "Thank you!";

    // OPEN EMAIL APPLICATION
    window.location.href =
        "mailto:" + recipient +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
}