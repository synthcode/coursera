$(function () {   // Same as document.addEventListener("DOMContentLoaded"...
  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

function loadChickenContent() {
  //console.log("Load Chicken Content!");
  window.location.replace('index.html#chicken-content');
};

function loadBeefContent() {
  //console.log("Load Beef Content!");
  window.location.replace('index.html#beef-content');
};

function loadSushiContent() {
  //console.log("Load Sushi Content!");
  window.location.replace('index.html#sushi-content');
};
