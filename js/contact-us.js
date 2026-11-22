// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const contactNumber = document.getElementById("contactNumber").value;
        const message = document.getElementById("message").value;

        const subject = "Contact Us Inquiry - " + firstName + " " + lastName;

        const body =
            "Name: " + firstName + " " + lastName + "\n" +
            "Email: " + email + "\n" +
            "Contact Number: " + contactNumber + "\n\n" +
            "Message:\n" + message;

        window.location.href =
            "mailto:hello@examplewebsite142.com?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(body);
    });
}


// FAQ EXPAND AND COLLAPSE

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {
    question.addEventListener("click", function() {

        const currentItem = question.closest(".faq-item");
        const isOpen = currentItem.classList.contains("active");

        // Close all FAQ items
        document.querySelectorAll(".faq-item").forEach(function(item) {
            item.classList.remove("active");

            const button = item.querySelector(".faq-question");
            const icon = item.querySelector(".faq-icon");

            if (button) {
                button.setAttribute("aria-expanded", "false");
            }

            if (icon) {
                icon.textContent = "+";
            }
        });

        // Open the selected FAQ item
        if (!isOpen) {
            currentItem.classList.add("active");

            question.setAttribute("aria-expanded", "true");

            const icon = currentItem.querySelector(".faq-icon");

            if (icon) {
                icon.textContent = "−";
            }
        }
    });
});