const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    // Demo login
    const correctEmail = "admin@gmail.com";
    const correctPassword = "123456";

    if (email === correctEmail && password === correctPassword) {
        message.textContent = "Login successful!";
        message.style.color = "green";

        // Go to another page
        // window.location.href = "home.html";
    } else {
        message.textContent = "Invalid email or password.";
        message.style.color = "red";
    }
});