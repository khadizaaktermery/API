// function currentTime() { let date = new Date(); let hh = date. getHours(); 
//     let mm = date. getMinutes(); let ss = date. getSeconds();
//      let session = "AM";
//       if(hh == 0){ hh = 12; } if(hh > 12){ hh = hh - 12; session = "PM"; }
//        hh = (hh < 10) ?}
let timer;

function startBtn(){
   const inputField = document.getElementById('input-field');
   // console.log(inputField )
   const inputFieldString = inputField.innerText;
   let input = parseFloat(inputFieldString);
   timer = setInterval(() => {
      input +=1;
      inputField.innerText = input;
   },1000 );
}

function stopBtn(){
   clearInterval(timer)
}
function restartBtn(){
   clearInterval(timer)

   const inputField = document.getElementById('input-field');
inputField.innerText = 0; 
startBtn() 
}