
 function myFunction() {
    let x = document.getElementById("nav-items");
    if (x.className === "nav") {
        x.className += " response";
    } else {
        x.className = "nav";
    }

}