console.log("welcome to tic tac teo");
let turn = "X";
const Boxes = document.getElementsByClassName("valuebox");
const ChangeTurn = () => {
  return turn === "X" ? "0" : "X";
};



const CheckWin=()=>{
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let toggle=0;
    let count=0;
    const boxText=document.getElementsByClassName("valuespan")
    win.forEach((e)=>{
        if((boxText[e[0]].innerText===boxText[e[1]].innerText)&&(boxText[e[1]].innerText===boxText[e[2]].innerText)&&(boxText[e[0]].innerText!=='')){
            document.querySelector('.turn').innerText=boxText[e[0]].innerText+'won';
            count++;
        }
    })
    if(count==0 && Array.from(Boxes).every(element => element.querySelector(".valuespan").innerText !== '')){
        document.querySelector('.turn').innerText='Draw'
    }
}

Array.from(Boxes).forEach((element) => {
  const BoxesElement = element.querySelector(".valuespan");
    element.addEventListener('click', () => {
    if (BoxesElement.innerText === '') {
      BoxesElement.innerText = turn;
      turn = ChangeTurn();
    //   console.log(document.getElementsByClassName("turn")[0])
      document.querySelector('.error').innerText='';
      document.getElementsByClassName("turn")[0].innerText=`Turn of ${turn}`
      CheckWin()
    } else {
        document.querySelector('.error').innerText='Invalid move! Cell already played.'
        console.log("Invalid move! Cell already played.")
      }
  });
});


btn.addEventListener('click',()=>{
   let boxvalue= document.querySelectorAll('.valuespan');
   Array.from(boxvalue).forEach(element=>{
    element.innerText='';
   })
   let WonValue=document.querySelector('.turn');
   WonValue.innerText='';
})