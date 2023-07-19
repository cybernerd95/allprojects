const textareaEl = document.getElementById("textarea")
const totalcontainerEl = document.getElementById("totalcontainer")
const remainingEl = document.getElementById("remaining")


textareaEl.innerText=''
textareaEl.addEventListener("keyup",()=>{
    updatecounter()
})
function updatecounter(){
    totalcontainerEl.innerText = textareaEl.value.length;
    remainingEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;

}