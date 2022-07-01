const ftr = document.querySelector("#feature");
const com = document.querySelector("#company");
const iconA = document.querySelector("#iconA");
const iconB = document.querySelector("#iconB");
const dropdownA = document.querySelector(".a");
const dropdownB = document.querySelector(".b");
const body = document.querySelector("body");

const iconFlip = function (e) {
  if (iconA.classList.contains("active")) {
    iconA.classList.remove("active");
    dropdownA.style.display = "none";
  } else {
    iconA.classList.toggle("active");
    dropdownA.style.display = "flex";
    dropdownB.style.display = "none";
    iconB.classList.remove("active");
  }
};
ftr.addEventListener("click", iconFlip);

com.addEventListener("click", function () {
  if (iconB.classList.contains("active")) {
    iconB.classList.remove("active");
    dropdownB.style.display = "none";
  } else {
    iconB.classList.toggle("active");
    dropdownB.style.display = "flex";
    dropdownA.style.display = "none";
    iconA.classList.remove("active");
  }
});
