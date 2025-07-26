document.addEventListener("DOMContentLoaded", () => {
      const button = document.querySelector(".color-btn");
      const navbar = document.getElementById("navbar");

      const colorPairs = [
        { bg: "#343a40", text: "#ffffff" },
        { bg: "#0d6efd", text: "#ffffff" },
        { bg: "#20c997", text: "#000000" },
        { bg: "#ffc107", text: "#000000" },
        { bg: "#dc3545", text: "#ffffff" }
      ];

      let colorIndex = 0;

      button.addEventListener("click", () => {
        const current = colorPairs[colorIndex];
        navbar.style.backgroundColor = current.bg;
        navbar.style.color = current.text;
        navbar.querySelector(".navbar-brand").style.color = current.text;
        colorIndex = (colorIndex + 1) % colorPairs.length;
      });

      // Contact form validation
      const form = document.getElementById("contactForm");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("messageError").textContent = "";

        if (name.value.trim() === "") {
          document.getElementById("nameError").textContent = "Name is required.";
          isValid = false;
        }

        if (email.value.trim() === "" || !email.value.includes("@")) {
          document.getElementById("emailError").textContent = "Enter a valid email.";
          isValid = false;
        }

        if (message.value.trim() === "") {
          document.getElementById("messageError").textContent = "Message cannot be empty.";
          isValid = false;
        }

        if (isValid) {
          alert("Thank you! Your message has been submitted.");
          form.reset();
        }
      });
    });