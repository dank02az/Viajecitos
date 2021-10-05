


let burger = document.querySelector(".burger"),
list_nav = document.querySelector("#nav_menu");

burger.addEventListener("click", function() {
list_nav.classList.toggle('active');
});


var back_top_btn = document.querySelector(".back-top");

window.onscroll = function () { scrollFunction() ,navbar_scrollUp(), navbarColor() };

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        back_top_btn.style.display = "block";
    } else {
        back_top_btn.style.display = "none";
    }
}

function back_top(){
    document.body.scrollTop = '0';
    document.documentElement.scrollTop = '0';
}


/** Navscroll up */

var prevScrollpos = window.pageYOffset;

function navbar_scrollUp() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header_nav").style.top = "0";
  } else {
    document.querySelector(".header_nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
/* nav-color */

var HeaderElm = document.querySelector('header');
var headerHeight = HeaderElm.clientHeight;
var altoDeScroll = document.documentElement.scrollTop;
//var currenP = 0 ;

function navbarColor(){
    //var currenP = document.documentElement.clientHeight;
     var currenP = document.documentElement.scrollTop;
    if ( currenP > 0) {
        document.querySelector(".header_nav").style.backgroundColor = "white";
        document.querySelector(".header_nav").style.color = 'black';
        document.querySelector(".header_nav").style.boxShadow = '0 1px 3px rgb(0 0 0 / 12%), 0 1px 3px rgb(0 0 0 / 2%)';
        document.querySelector(".main-nav ").style.fontWeight = 'bolder';
        console.log('backgroundColor : white');
      } else {
        document.querySelector(".header_nav").style.backgroundColor = "transparent";
        document.querySelector(".header_nav").style.color = "white";
        document.querySelector(".header_nav").style.boxShadow = 'none';
        document.querySelector(".main-nav ").style.fontWeight = '100';
        console.log('backgroundColor : transparente')
      }
     //headerHeight = currentScrollPos;
}


