document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            alert("Hello, David!");
            window.location.href = "https://cgp.genericgs.com";
        });
    });
});