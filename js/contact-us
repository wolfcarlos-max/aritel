// contact-us.js - the contact form and the FAQ on the contact page

var form = document.getElementById("contactForm");
var formStatus = document.getElementById("form-status");

// checks one field. returns true if it is ok, and shows/hides the red error
function checkField(field) {
  var ok = true;

  if (field.type === "checkbox") {
    ok = field.checked;
  } else if (field.value.trim() === "") {
    ok = false;
  } else if (field.type === "email") {
    // very simple email check: something@something.something
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    ok = emailPattern.test(field.value.trim());
  } else if (field.type === "tel") {
    // numbers, spaces, + - ( ) only
    var phonePattern = /^[0-9+\-\s()]{7,20}$/;
    ok = phonePattern.test(field.value.trim());
  }

  if (ok) {
    field.classList.remove("is-invalid");
    field.setAttribute("aria-invalid", "false");
  } else {
    field.classList.add("is-invalid");
    field.setAttribute("aria-invalid", "true");
  }
  return ok;
}

var fields = form.querySelectorAll("input, textarea");

// when the user fixes a field that has an error, check it again
fields.forEach(function (field) {
  field.addEventListener("input", function () {
    if (field.classList.contains("is-invalid")) {
      checkField(field);
    }
  });
  field.addEventListener("change", function () {
    if (field.classList.contains("is-invalid")) {
      checkField(field);
    }
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // don't reload the page

  var firstWrongField = null;
  fields.forEach(function (field) {
    var ok = checkField(field);
    if (ok === false && firstWrongField === null) {
      firstWrongField = field;
    }
  });

  if (firstWrongField !== null) {
    formStatus.textContent = "Please fix the fields with errors and try again.";
    formStatus.className = "form-status error";
    firstWrongField.focus();
    return;
  }

  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("contactNumber").value.trim();
  var message = document.getElementById("message").value.trim();

  var subject = "Contact Us Inquiry - " + firstName + " " + lastName;
  var body =
    "First Name: " + firstName + "\n" +
    "Last Name: " + lastName + "\n" +
    "Email: " + email + "\n" +
    "Contact Number: " + phone + "\n\n" +
    "Message:\n" + message;

  formStatus.textContent = "Opening your email app... if nothing happens, email us at hello@examplewebsite142.com";
  formStatus.className = "form-status success";

  window.location.href = "mailto:hello@examplewebsite142.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
});


// ---------- FAQ: click the + to show or hide the answer ----------
var questions = document.querySelectorAll(".faq-question");

questions.forEach(function (question) {
  question.addEventListener("click", function () {
    var item = question.closest(".faq-item");
    var icon = question.querySelector(".faq-icon");

    if (question.getAttribute("aria-expanded") === "true") {
      question.setAttribute("aria-expanded", "false");
      item.classList.remove("active");
      icon.textContent = "+";
    } else {
      question.setAttribute("aria-expanded", "true");
      item.classList.add("active");
      icon.textContent = "−";
    }
  });
});
