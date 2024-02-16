document.addEventListener("DOMContentLoaded", function() {
    var buttonsSection = document.querySelector(".buttons");
    var addBtn = document.querySelector('.addBtn');

    addBtn.addEventListener("click", function() {
        var newBtn = document.createElement("button");
        newBtn.classList.add("colorizeButton");
        newBtn.textContent = "Click Me";
        buttonsSection.appendChild(newBtn);
    });

    buttonsSection.addEventListener("click", function(event) {
        if (event.target.classList.contains("colorizeButton")) {
            var randomColor = getRandomColor();
            event.target.style.backgroundColor = randomColor;
        }
    });

    function getRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var color = 'rgb(' + r + ',' + g + ',' + b + ')';
        return color;
    }
});
