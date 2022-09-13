stitchCountHeading = document.querySelector(".stitch-count");
stitchButton = document.querySelector(".stitch-btn");
stitchResetButton = document.querySelector(".stitch-reset");

rowCountHeading = document.querySelector(".row-count");
rowButton = document.querySelector(".row-btn");
rowResetButton = document.querySelector(".row-reset");

saveButton = document.querySelector(".save-btn");
savedProgress = document.querySelector(".progress-update");
doneButton = document.querySelector(".done");

let stitchCount = 0;
let rowCount = 0;

alert(`Hint: Try the up/down/left/right arrows to adjust your counts!`);

const stitchClick = function () {
    stitchCount += 1;
    stitchCountHeading.innerText = `${stitchCount}`;
    console.log(stitchCount);
};

const stitchResetClick = function () {
    stitchCount = 0;
    stitchCountHeading.innerText = 0;
};

const rowClick = function () {
    rowCount += 1;
    rowCountHeading.innerText = `${rowCount}`;
    console.log(rowCount);
};

const rowResetClick = function () {
    rowCount = 0;
    rowCountHeading.innerText = 0;
};

const saveButtonClick = function () {
    savedProgress.classList.remove("hide");
    savedProgress.innerText = `You are currently on row ${rowCount}, stitch number ${stitchCount}. When you come back, you will start with stitch number ${stitchCount + 1}.`;

    doneButton.classList.remove("hide");
};

const doneClick = function () {
    rowCount = 0;
    rowCountHeading.innerText = 0;

    stitchCount = 0;
    stitchCountHeading.innerText = 0;

    doneButton.classList.add("hide");
    savedProgress.classList.add("hide");
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        stitchClick()
        e.preventDefault()
    } else if (e.key === "ArrowDown") {
        e.preventDefault()
        stitchCount -= 1;
        stitchCountHeading.innerText = `${stitchCount}`;
    } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        rowCount -= 1;
        rowCountHeading.innerText = `${rowCount}`;
    } else if (e.key === "ArrowRight") {
        e.preventDefault()
        rowClick();
    }

});