document.querySelector("#order").addEventListener("click", function() {
    document.querySelector(".order-popup").classList.add("active-pop");
  
  });
  
  document.querySelector(".order-popup .close-btn-1").addEventListener("click", function() {
    document.querySelector(".order-popup").classList.remove("active-pop");

  });

// document.querySelector("#order").addEventListener("click", function() {
//     console.log("Открытие модального окна");
//     document.querySelector(".order-popup").classList.add("active-pop");
// });

// document.querySelector(".order-popup .close-btn").addEventListener("click", function() {
//     console.log("Закрытие модального окна");
//     document.querySelector(".order-popup").classList.remove("active-pop");
// });