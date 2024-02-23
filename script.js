"use strict";

const show_modal = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");
const title = document.querySelector(".title");

show_modal.forEach((item, index) => {
  item.addEventListener("click", () => showModal(index));
});

function showModal(index) {
  title.innerHTML = "I'm a modal window number " + (index + 1);

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

closeBtn.addEventListener("click", closeModal);
window.addEventListener("keydown", closeModal);
overlay.addEventListener("mousedown", closeModal);

function closeModal(e) {
  if (
    typeof e.pointerId == "number" ||
    e.key === "Escape" ||
    e.target.classList[0] == "overlay"
  ) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
}
