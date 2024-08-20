const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const text = document.querySelector("#text");

// initialize buttons
button1.onclick = look;
button2.onclick = look;

function look() {
    text.innerHTML = "You are stuck in a sand ditch.<br>Do you want to crawl out left, or right?";
    button1.innerText = "LEFT";
    button1.onclick = left;
    button2.innerText = "RIGHT";
    button2.onclick = right;
}