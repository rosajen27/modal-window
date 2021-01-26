'use strict';

// save elements in a variable
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// OPEN modal window with click event listener on Show Modal 1, 2, 3 buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", function () {

        // remove 'hidden' css class
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}

// CLOSE modal window with click event listener on X button
btnCloseModal.addEventListener("click", function () {

    // add 'hidden' css class
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});

// CLOSE modal window with click event listener on overlay
overlay.addEventListener("click", function () {

    // add 'hidden' css class
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});

// CLOSE modal window with escape button
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        // if modal DOES NOT contain 'hidden' css class, add 'hidden css class
        if (!modal.classList.contains("hidden")) {
            modal.classList.add("hidden");
            overlay.classList.add("hidden");
        }
    }
});