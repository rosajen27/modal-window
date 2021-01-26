'use strict';

// save elements in a variable
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// click event listener to OPEN modal window
// Show Modal 1, 2, 3 buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", function () {

        // remove 'hidden' css class
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}

// click event listener to CLOSE modal window
// X button
btnCloseModal.addEventListener("click", function() {

    // add 'hidden' css class
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});

// click event listener to CLOSE modal window
// overlay
overlay.addEventListener("click", function() {

    // add 'hidden' css class
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});