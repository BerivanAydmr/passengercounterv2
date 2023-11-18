let saveEl = document.getElementById("save-el");
let gecmisBilgi = localStorage.getItem("gecmisBilgi");
if (gecmisBilgi !== null) {
    saveEl.textContent = localStorage.getItem("gecmisBilgi");
} else {
    saveEl.textContent = "";
}

let countEl = document.getElementById("count-el");
let totalCountEl = document.getElementById("total-count");
let count = 0;
let totalCount = localStorage.getItem("totalCount") ? parseInt(localStorage.getItem("totalCount")) : 0;

countEl.textContent = count;
totalCountEl.textContent = totalCount;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    totalCount += count;
    totalCountEl.textContent = totalCount;
    
    localStorage.setItem("gecmisBilgi", saveEl.textContent);
    localStorage.setItem("totalCount", totalCount);
    
    countEl.textContent = 0;
    count = 0;
}
