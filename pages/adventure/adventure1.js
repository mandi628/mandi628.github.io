const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const text = document.querySelector("#text");

// initialize buttons
button1.onclick = look;
button2.onclick = look;

function look() {
    text.innerHTML = "You are stuck in a sand ditch.<br>Do you want to crawl out left, or right?";
    button1.innerText = "LEFT";
    button2.innerText = "RIGHT";
    button1.onclick = left;
    button2.onclick = right;
}

function left() {
    text.innerHTML = "You see a starfish and a crab on the sand.<br><br>You're hungry! Which one do you eat?";
    button1.innerText = "STARFISH";
    button2.innerText = "CRAB";
    button1.onclick = starfish;
    button2.onclick = crab;
}

function die() {
    button1.innerText = "Restart";
    button2.innerText = "End Game";
    button1.onclick = restart;
    button2.onclick = end;
}

function starfish() {
    text.innerHTML = "Oh no! You immediately do not feel well.<br><br>You do not survive.";
    die();
}

function crab() {
    text.innerHTML = "Raw crab should be fine, right?"
    button1.innerText = "YES";
    button2.innerText = "NO";
    button1.onclick = crabYes;
    button2.onclick = crabNo;
}

function crabYes() {
    text.innerHTML = "Ok, you eat it raw. Fingers crossed...<br><br>Food in your belly helps. You see a tree.";
    button1.innerText = "TREE";
    button2.innerText = "TREE";
    button1.onclick = tree;
    button2.onclick = tree;
}

function tree() {
    text.innerHTML = "It's a coconut tree! And your'e thirsty!<br><br>Do you drink the coconut water?";
    button1.innerText = "YES";
    button2.innerText = "NO";
    button1.onclick = coconutYes;
    button2.onclick = coconutNo;
}

function coconutYes() {
    text.innerHTML = "Oh boy. Coconut water and raw crab do not mix.<br><br>You do not survive.";
    die();
}

function coconutNo() {
    text.innerHTML = "Good choice...<br>The sun is setting and you see two caves.<br><br>Do you choose the cave on the left, or the cave on the right?";
    button1.innerText = "LEFT";
    button2.innerText = "RIGHT";
    button1.onclick = caveLeft;
    button2.onclick = caveRight;
}

function caveRight() {
    text.innerHTML = "This cave is roomy and dry. You will sleep well tonight.";
    button1.innerText = "SLEEP";
    button2.innerText = "AWAKE";
    button1.onclick = sleep;
    button2.onclick = sleep;
}

/* TODO: Make an alternate path for AWAKE... */

function sleep() {
    text.innerHTML = "It is now morning, and you are rested, but hungry again.<br><br>Do you go back for a coconut, or hunt for something else?";
    button1.innerText = "COCONUT";
    button2.innerText = "HUNT";
    button1.onclick = coconutRotten;
    button2.onclick = hunt;
}

function coconutRotten() {
    text.innerHTML = "Darn! That coconut was rotten after all! Looks like coconuts are a bad choice on this island.<br><br>You do not survive.";
    die();
}

function hunt() {
    text.innerHTML = "Great job! You found food!<br><br>And just in time! A rescue plane has just flown over the island and spotted you!<br><br>YOU WIN!";
    die();
}

function caveLeft() {
    text.innerHTML = "Oh no! A bear has already chosen this cave, and he's attacking!<br><br>You do not survive.";
    die();
}

function crabNo() {
    text.innerHTML = "Well, there's nothing left to eat.<br><br>You do not survive.";
    die();
}

function right() {
    text.innerHTML = "No can do. That side is very slippery.<br>You fall very far into some weird cavern.<br><br>You do not survive.";
    die();
}

function restart() {
    text.innerHTML = "You are on a deserted island in a 2D world. Try to survive until rescue arrives!<br><br>First, look around.";
    button1.innerText = "LOOK";
    button2.innerText = "LOOK";
    button1.onclick = look;
    button2.onclick = look;
}

function end() {
    window.open("./adv-index.html", "_self");
}