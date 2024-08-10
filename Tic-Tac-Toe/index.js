let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgCon= document.querySelector(".msg");
let winnerElement = document.querySelector("#winner");
let turnO = true ; // playerX , playerO


const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true ;
    enamlebleBoxes() ;
    msgCon.classList.add("hide");
}

const disableBoxes = ()=>{
    for( let box of boxes){
        box.disabled=true ;
    }
};
const enamlebleBoxes = ()=>{
    for( let box of boxes){
        box.disabled=false ;
        box.innerText="";
    }
};
const showWinner =(winner)=>{
    winnerElement.innerText = `Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disableBoxes();
}

boxes.forEach( (box)=>{
    box.addEventListener("click" , ()=>{
    if(turnO){
        box.innerText="O";
        turnO =false ;
    }
    else{
        box.innerText="X";
        turnO = true ;
    }
    box.disabled = true ;
    checkWinner();
});
});

const checkWinner = ()=>{
    for( let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText ;
        let pos2Val = boxes[pattern[1]].innerText ;
        let pos3Val = boxes[pattern[2]].innerText ;
        if(pos1Val!="" && pos2Val!= "" && pos3Val != ""){
            if(pos1Val=== pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);