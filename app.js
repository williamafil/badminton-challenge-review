document.querySelector("#challenge-btn").addEventListener("click", () => {
  document.querySelector("#modal-wrapper").classList.remove("opened");
  const animationEls = document.querySelectorAll(".animation");
  animationEls.forEach((el) => {
    el.style.animationPlayState = "running";
  });
});
