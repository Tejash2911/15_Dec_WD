

function multiply() {
    let number = document.getElementById("number").value;
    var output = "";
    for (let i = 1; i <= 10; i++) {
        output = output + "<tr><td>" + number + " * " + i + "</td><td> = </td>" + "<td>" + i * number + "</td></tr>";
    }
    document.getElementById("result").innerHTML = output;
    return false;
}