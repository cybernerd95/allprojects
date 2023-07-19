const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const formel= document.getElementById("form")
const inputel= document.getElementById("input")
const questionEl = document.getElementById("multiply")
const scoreEl= document.getElementById("score");
let score = JSON.parse( localStorage.getItem("score"))
questionEl.innerText = `What is  ${num1} multiplied with ${num2}`

if (!score) {
    score = 0;
  }
  
scoreEl.innerText = `score: ${score}`;

const correctans= num1 * num2;
formel.addEventListener("submit",()=>{
    const userans= inputel.value
    console.log(userans,correctans);
    if (userans == correctans){
        score++
        updatelocatstorage()
    } else {
        score--
        updatelocatstorage()
    }
})
function updatelocatstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
