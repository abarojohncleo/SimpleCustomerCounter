// increment for each click

let elementCountDisplay = document.getElementById("count-element");
let elementTotalCountDisplay = document.getElementById("total-el")

let count = 0;
let totalCount = 0;

function increment() {
    count = count + 1;
    elementCountDisplay.innerText = count;
}

function save() {
    totalCount = totalCount + count;
    elementTotalCountDisplay.innerText = totalCount;
    console.log(totalCount)

    count = 0;
    elementCountDisplay.innerText = count;
}