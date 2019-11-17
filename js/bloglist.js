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

var dmodal = document.getElementById("dmyModal");

// Get the button that opens the modal
var dbtn = document.getElementById("delete");
var ddbtn = document.getElementById("no");

// Get the <span> element that closes the modal
var dspan = document.getElementsByClassName("dclose")[0];

// When the user clicks the button, open the modal
dbtn.onclick = function() {
    dmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
dspan.onclick = function() {
    dmodal.style.display = "none";
}
ddbtn.onclick = function() {
    dmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        dmodal.style.display = "none";
    }
}
