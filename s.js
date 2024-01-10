document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Simulate successful signup
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        // You can add your own validation logic here
        if (username && password) {
            // Redirect to product.html
            window.location.href = "product.html";
        }
         else {
            alert("Please fill in both fields.");
        }
       
    })
});
