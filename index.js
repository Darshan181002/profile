var typeData = new Typed(".role", {
    strings: [
      "FrontEnd  Developer",
      "Web Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
}
