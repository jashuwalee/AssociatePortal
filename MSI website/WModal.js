// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
// Get the button that opens the modal
var btnTS = document.getElementById("myBtn1");
var btnBC = document.getElementById("myBtn2");
// Get the <span> element that closes the modal
var spanTS = document.getElementById("close1");
var spanBC = document.getElementById("close2");

var close1 = document.getElementById("close1")
var close2 = document.getElementById("close2")



// When the user clicks the button, open the modal 
btnBC.onclick = function() {
modal2.style.display = "block";
}
// When the user clicks the button, open the modal 
btnTS.onclick = function() {
modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanTS.onclick = function() {
    modal1.style.display = "none";
}

spanBC.onclick = function() {
    modal2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal2) {
    modal2.style.display = "none";
}
else if (event.target == modal1) {
    modal1.style.display = "none";
}
}