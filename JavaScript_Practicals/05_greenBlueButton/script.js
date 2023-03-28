function selectGreenFn() {
    let box1 = document.getElementById("box1");
    if (box1.style.backgroundColor != "green") {
        box1.style.backgroundColor = "green";
    } else {
        box1.style.backgroundColor = "transparent";
    }
}

function selectBlueFn() {
    let box2 = document.getElementById("box2");
    if (box2.style.backgroundColor != "blue") {
        box2.style.backgroundColor = "blue";
    } else {
        box2.style.backgroundColor = "transparent";
    }
}