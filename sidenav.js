
  window.addEventListener("scroll", onScroll);

  function onScroll() {
    for (var item of document.querySelectorAll(".introduction")) {
      elementVisible(item);
    }
  }
  
  function elementVisible(el) { 
    let top = el.offsetTop;
    let height = el.offsetHeight;
    let bottom = top + height;
  
    let IsOverBottom = top > (window.pageYOffset + window.innerHeight);
    let IsBeforeTop = bottom < window.pageYOffset;
  
    if (!IsOverBottom && !IsBeforeTop) {
      el.classList.add("show");
    }
  }
  //On Scroll done//

  //On Scroll done//
  
  
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
// SideBar done//
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//
