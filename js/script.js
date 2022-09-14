// STITCH COUNT TOOL
// h3 to display stitch count
const stitchCountHeading = document.querySelector(".stitch-count");
// Button to increase stitch count
const stitchButton = document.querySelector(".stitch-btn");
// Button to reset stitch count
const stitchResetButton = document.querySelector(".stitch-reset");

// ROW COUNT TOOL
// h3 to display row count
const rowCountHeading = document.querySelector(".row-count");
// Button to increase row count
const rowButton = document.querySelector(".row-btn");
// Button to reset row count
const rowResetButton = document.querySelector(".row-reset");

// BOTTOM SECTION: SAVE, PROGRESS SUMMARY, AND DONE
// Button to save progress into a summary
const saveButton = document.querySelector(".save-btn");
// h3 to appear when save button is selected summarizing stitch and row count progress
const savedProgress = document.querySelector(".progress-update");
// Button to reset counts and remove summary
const doneButton = document.querySelector(".done");

let stitchCount = 0;
let rowCount = 0;

alert(`Hint: Try the up/down/left/right arrows to adjust your counts!`);

// This function is called when the "+" button is clicked for the user's stitch count.
const stitchClick = function () {
    // Increasing stitch count by one
    stitchCount += 1;
    stitchCountHeading.innerText = `${stitchCount}`;
    //console.log(stitchCount);
};

// This function is called when the "reset" button is clicked for the user's stitch count
const stitchResetClick = function () {
    // Resetting stitch count to zero
    stitchCount = 0;
    stitchCountHeading.innerText = 0;
};

// This function is called when the "+" button is clicked for the user's row count.
const rowClick = function () {
    // Increasing row count by one
    rowCount += 1;
    rowCountHeading.innerText = `${rowCount}`;
    //console.log(rowCount);
};

// Function is called when the "reset" button is clicked for the user's row count.
const rowResetClick = function () {
    // Resetting row count to zero
    rowCount = 0;
    rowCountHeading.innerText = 0;
};

// Function is called when the "save" button is clicked
const saveButtonClick = function () {
    // Removing .hide class from text and customizing it to contain details of user's stitch and row counts.
    savedProgress.classList.remove("hide");
    savedProgress.innerText = `You are currently on row ${rowCount}, stitch number ${stitchCount}. When you come back, you will start with stitch number ${stitchCount + 1}.`;

    // Removing .hide class from "done" button.
    doneButton.classList.remove("hide");
};


// Function is called when "done" button is selected.
const doneClick = function () {
    // Resetting row count to zero
    rowCount = 0;
    rowCountHeading.innerText = 0;

    // Resetting stitch count to zero
    stitchCount = 0;
    stitchCountHeading.innerText = 0;

    // Hiding done button and progress summary until the next time the "save" button is clicked.
    doneButton.classList.add("hide");
    savedProgress.classList.add("hide");
}

// Adding keydown events for customizing row and stitch counts with the up, down, left and right arrows.
document.addEventListener("keydown", function (e) {
    // Up Arrow increases stitch count by 1
    if (e.key === "ArrowUp") {
        stitchClick()
        e.preventDefault()
    // Down arrow decreases stitch count by 1
    } else if (e.key === "ArrowDown") {
        e.preventDefault()
        stitchCount -= 1;
        stitchCountHeading.innerText = `${stitchCount}`;
    // Left arrow decreases row count by 1
    } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        rowCount -= 1;
        rowCountHeading.innerText = `${rowCount}`;
    // Right arrow increases row count by 1
    } else if (e.key === "ArrowRight") {
        e.preventDefault()
        rowClick();
    }
});