console.log("this is a console message");

document.addEventListener('mousemove', function (event) {
    let theDiv = document.getElementById("mydiv");
    theDiv.style.left = event.clientX;
    theDiv.style.top = event.clientY;
}
)