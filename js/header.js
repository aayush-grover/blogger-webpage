var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("signup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var imodal = document.getElementById("inmyModal");

// Get the button that opens the modal
var ibtn = document.getElementById("signin");
var iibtn = document.getElementById("signupi")

// Get the <span> element that closes the modal
var ispan = document.getElementsByClassName("   iclose")[0];

// When the user clicks the button, open the modal
ibtn.onclick = function() {
    imodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ispan.onclick = function() {
    imodal.style.display = "none";
}
iibtn.onclick = function() {
    imodal.style.display = "none";
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == imodal) {
        imodal.style.display = "none";
    }
}

var pmodal = document.getElementById("postmyModal");

// Get the button that opens the modal
var pbtn = document.getElementById("post");

// Get the <span> element that closes the modal
var pspan = document.getElementsByClassName("pclose")[0];

// When the user clicks the button, open the modal
pbtn.onclick = function() {
    pmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
pspan.onclick = function() {
    pmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == pmodal) {
        pmodal.style.display = "none";
    }
}


