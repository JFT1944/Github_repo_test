const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
count = 0 
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.classList.add(nums[count])
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
    count++
  }
}
let farray = []
let zarray = []
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target)


  let clr = event.target.classList[1]
console.log(event.target.classList[1] + 'this is zero')
let clr2 = event.target.classList[0]
console.log(clr2)
console.log(document.querySelector(`.${clr}`).style.background = clr2)
    
  
  //Game Logic 
  farray.push(event.target.classList[0])
    zarray.push(event.target.classList[1])
    console.log(farray)
    console.log(zarray[0])

    if(farray.length === 1) return
    if(farray[0] === farray[1] && farray.length === 2 && zarray[0] !== zarray[1]){
      console.log('It is a match!')
      farray.pop()
      farray.pop()
      zarray.pop()
      zarray.pop()
    }else{
      console.log('It is not a match')
      console.log(zarray[0] + 'this is the array')
     
setTimeout(()=>{
  console.log(zarray[0] + ' inside setTimeOut')
  document.querySelector(`.${zarray[0]}`).style.background = 'none'
  document.querySelector(`.${zarray[1]}`).style.background = 'none'
  zarray.pop()
  zarray.pop()
  console.log('zarray is empty')
}, 1000, 'zarray')
      
      farray.pop()
      farray.pop()
      
     



  }

}













// when the DOM loads
createDivsForColors(shuffledColors);

document.querySelector('#btn').addEventListener('click', ()=>{
  location.reload()
})
/*  console.log(event.target.classList[0])
  matchChecker.push(event.target.classList[0])
  console.log(matchChecker) */
