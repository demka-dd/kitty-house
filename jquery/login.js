
document.querySelector("#show-login").addEventListener("click", function() {
  document.querySelector(".popup").classList.add("active");
//   document.body.classList.add("blur");
});

document.querySelector(".popup .close-btn").addEventListener("click", function() {
  document.querySelector(".popup").classList.remove("active");
//   document.body.classList.remove("blur");
});
