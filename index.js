let inputText = document.getElementById('textInput')
const arrowButton = document.getElementById('arrowButton')
const xButton = document.getElementById('xButton')
let choresArray = []
let choresList = document.getElementById('choresList')

arrowButton.addEventListener("click", function(){
    choresArray.push(inputText.value)
    updateList(choresArray.length-1)
    inputText.value=""
})

xButton.addEventListener("click", function(){
    choresArray=[]
    choresList.innerHTML=""
})

function updateList(index){
    choresList.innerHTML+=`<li class="listItem"> ${choresArray[index]} </li>`
}