let inputText = document.getElementById('textInput')
const arrowButton = document.getElementById('arrowButton')
const xButton = document.getElementById('xButton')
let choresArray = []
let choresList = document.getElementById('choresList')

arrowButton.addEventListener("click", function(){
    choresArray.push(inputText.value)
    updateList(choresArray.length-1)
    inputText.value=""
    console.log("arrow pressed")
})

xButton.addEventListener("click", function(){
    choresArray=[]
    choresList.innerHTML=""
})

//remove chore from list and array
choresList.addEventListener("click", function(e){
   e.target.remove()
   console.log(choresArray)
   let text = e.target.firstChild.textContent
  /* console.log(typeof(text)) //string
   let newArray = choresArray.filter((val)=> {
    console.log(typeof(val))
    return !(text === val)
   })
    console.log(newArray)*/
    for(let count=0;count<choresArray.length;count++){
        if(choresArray[count] === text){
            
        }
    }
})

function updateList(index){
    choresList.innerHTML+=`<li class="listItem"> ${choresArray[index]} </li>`
}

