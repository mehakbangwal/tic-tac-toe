let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let newgame = document.querySelector(".new-game");
let msg_cont = document.querySelector(".msg-contain");
let msg = document.querySelector(".msg");

let turn0 = true;

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
});

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pat1 = boxes[pattern[0]].innerText;
        let pat2 = boxes[pattern[1]].innerText;
        let pat3 = boxes[pattern[2]].innerText;
        if (pat1 !== "" && pat2 !== "" && pat3 !== "") {
            if (pat1 === pat2 && pat2 === pat3) {
                show_winner(pat1);
                return; 
            }
        }
    }
    checktie();
}

const show_winner = (winner) => {
    msg.innerText = `Congrats, winner is player ${winner}!`;
    msg_cont.classList.remove("hide");
    for (let box of boxes) {
        box.disabled = true;
    }
}

const checktie = () => {
    let isTie = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            isTie = false;
            break;
        }
    }
    if (isTie) {
        msg.innerText = "It's a tie!";
        msg_cont.classList.remove("hide");
    }
}

const resetgame = () => {
    turn0 = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    msg_cont.classList.add("hide");
}

reset.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);

