function myFunction() {
    var num1 = Math.floor(Math.random() * 6) + 1;
    var num2 = Math.floor(Math.random() * 6) + 1;
    var s1 = "dice" + num1 + ".png ";
    var s2 = "dice" + num2 + ".png ";
    if (num1 > num2) {
        document.querySelector("#display ").innerHTML = "player 1 wins ";

    } else if (num1 === num2) {
        document.querySelector("#display ").innerHTML = "It 's a draw";

    } else {
        document.querySelector("#display").innerHTML = "player 2 wins";
    }

    document.querySelector("img.first").setAttribute("src", s1);
    document.querySelector("img.second").setAttribute("src", s2);
}