//getting submitted info
const memeContainer = document.querySelector('#memeContainer')
let form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
   e.preventDefault()
   //  console.log(e)
   const memeImageInput = e.target[0].value
   const topImageText = e.target[1].value
   const bottomImageText = e.target[2].value

   let newDiv = document.createElement('div')
   let newImage = document.createElement('img')
   newImage.setAttribute('src', `${memeImageInput}`)
   let newTopText = document.createElement('h1')
   newTopText.innerText = topImageText
   let newBottomText = document.createElement('h2')
   newBottomText.innerText = bottomImageText
   let removeButton = document.createElement('button')
   removeButton.innerText = "Remove"
   newDiv.append(newImage) 
   newDiv.append(newTopText)
   newDiv.append(newBottomText)
   newDiv.append(removeButton)
   newDiv.classList.add('sepDiv')
   console.log(newDiv)
   memeContainer.append(newDiv)
   form.reset()
})

memeContainer.addEventListener('click', (e)=>{
if(e.target.innerText === 'Remove'){
   e.target.parentElement.remove()
} else {
return
}
})