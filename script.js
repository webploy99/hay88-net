// ============= menu icon ===============
const menuicon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuicon.addEventListener("click", function () {
  menuicon.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// When the user clicks on the button, scroll to the top of the document
    function topScroll() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

// active button
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("actived");
    current[0].className = current[0].className.replace(" actived", "");
    this.className += " actived";
  });
}



// click change items 
const $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document);

const titleContent = $$(".title-item"),
  boxContent = $$(".box-item");

titleContent.forEach((title, index) => {
  const boxed = boxContent[index];
  title.onclick = function () {
    $(".title-item.active").classList.remove("active");
    $(".box-item.active").classList.remove("active");
    this.classList.add("active");
    boxed.classList.add("active");
  };
});