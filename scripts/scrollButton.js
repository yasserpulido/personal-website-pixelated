const button = document.getElementById("button");
const arrow = document.getElementById("arrow");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    arrow.src = "./images/arrow-up.png";
  } else {
    arrow.src = "./images/arrow-down.png";
  }
}

function goUp() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
