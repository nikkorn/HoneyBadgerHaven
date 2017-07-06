window.addEventListener("HTMLImportsLoaded", function(e) {
    var template = document.getElementById("nav_template").querySelector("nav");

    var target = document.getElementById("nav_target");

    target.appendChild(template.cloneNode(true));
});