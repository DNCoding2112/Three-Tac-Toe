let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let turnO=true;
let turnX=false;
let turnY=false;
const msg=document.getElementById("msg");
const msgCon = document.querySelector(".msg-con");
const newGameBtn=document.getElementById("new");
const ResetGameBtn=document.getElementById("res");
const winptn=[
[0,1,2],
[0,3,6],
[3,4,5],
[6,7,8],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
const winnerptn = [
    // Rows
    [0, 1, 2], [1, 2, 3],
    [4, 5, 6], [5, 6, 7],
    [8, 9, 10], [9, 10, 11],
    [12, 13, 14], [13, 14, 15],

    // Columns
    [0, 4, 8], [4, 8, 12],
    [1, 5, 9], [5, 9, 13],
    [2, 6, 10], [6, 10, 14],
    [3, 7, 11], [7, 11, 15],

    // Diagonals
    [0, 5, 10], [1, 6, 11],
    [4, 9, 14], [5, 10, 15],
    [3, 6, 9], [2, 5, 8],
    [7, 10, 13], [6, 9, 12]
];


boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnX===false && turnY===false){
            box.innerText="O";
            turnO=false;
            turnX=true;
            turnY=false;
        }
        else if(turnO==false && turnY ==false){
            box.innerText="X";
            turnO=false;
            turnX=false;
            turnY=true;
        }
        else{
            box.innerText="Y";
            turnY=false;
            turnX=false;
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWin=(winner)=>{
    msg.innerText=`${winner} is the Winner!`;
    msgCon.classList.remove("hide"); 
    disableBoxes(); 
}

function checkWinner(){
    for(let pattern of winnerptn){
        let p1V=boxes[pattern[0]].innerText;
        let p2V=boxes[pattern[1]].innerText;
        let p3V=boxes[pattern[2]].innerText;

        if(p1V!="" && p2V!="" && p3V!="" && p1V===p2V && p2V===p3V & p3V===p1V){
            console.log("Winner is: ",p1V);
            showWin(p1V);
        }
    }
}

function resetGame(){
    turnO=true;
    turnX=false;
    turnY=false;
    enableBoxes();
    msgCon.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
ResetGameBtn.addEventListener("click", resetGame);