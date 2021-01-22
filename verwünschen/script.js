
function myFunction() {
    var scrollPercent = ((((document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight - document.documentElement.clientHeight))*400) + "px");
    var topbottom = (((((document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight - document.documentElement.clientHeight))*(-224))+240) + "px");
    document.getElementById("show").innerHTML = "hahahahahaha";
    document.getElementById("carlita").style.width = scrollPercent;
    document.getElementById("carlita").style.right = topbottom;
    var lastPercent = document.body.scrollTop;
  }
  window.addEventListener("scroll", otherFunction);
  window.addEventListener("scroll", myFunction);


function otherFunction() {
  document.getElementById("pussy1").style.width = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("pussy2").style.width = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("pussy3").style.width = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("monster").style.width = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("auge").style.width = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("gflasht").style.width = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("sexmask").style.width = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("handface").style.width = ((Math.floor(Math.random() * 500) + 1) + "px");

  document.getElementById("pussy1").style.top = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("pussy2").style.top = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("pussy3").style.top = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("monster").style.top = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("auge").style.top = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("gflasht").style.top = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("sexmask").style.top = ((Math.floor(Math.random() * 500) + 1) + "px");
  document.getElementById("handface").style.top = ((Math.floor(Math.random() * 500) + 1) + "px");

  document.getElementById("pussy1").style.left = ((Math.floor(Math.random() * 1000) + 1) + "px");
  document.getElementById("pussy2").style.left = ((Math.floor(Math.random() * 1000) + 1) + "px");
  document.getElementById("pussy3").style.left = ((Math.floor(Math.random() * 1000) + 1) + "px");
  document.getElementById("monster").style.left = ((Math.floor(Math.random() * 1000) + 1) + "px");
  document.getElementById("auge").style.left = ((Math.floor(Math.random() * 1000) + 1) + "px");
  document.getElementById("gflasht").style.left = ((Math.floor(Math.random() * 1000) + 1) + "px");
  document.getElementById("sexmask").style.left = ((Math.floor(Math.random() * 1000) + 1) + "px");
  document.getElementById("handface").style.left = ((Math.floor(Math.random() * 1000) + 1) + "px");
}
