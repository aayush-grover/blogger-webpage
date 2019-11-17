var btn = document.getElementById("btn");

btn.onclick = function () {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Like") {
        x.innerHTML = "Liked";
    } else {
        x.innerHTML = "Like";
    }
}

var ebtn = document.getElementById("edit");
var body = document.getElementById("blogBody");

ebtn.onclick = function () {
    body.contentEditable = true;
    var x = document.getElementById("ed");
    if (x.innerHTML === "Edit") {
        x.innerHTML = "Save";
    } else {
        x.innerHTML = "Edit";
        body.contentEditable = false;
    }

}

var cbtn = document.getElementById("cmt");


cbtn.onclick = function () {
    var para = document.createElement("p");
    para.style.background = "white";
     para.innerText = document.getElementById("area").value;
    document.getElementById("add").prepend(para);
    document.getElementById("area").value = '';
}
