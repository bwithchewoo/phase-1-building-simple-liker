// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let classHearts = document.querySelectorAll(".like-glyph")

function like(event){
  //get the element that triggered the event
  let heart = event.target
  //invoke mimicServerCall to simulate making a server request
  mimicServerCall(url="file://///wsl$/Ubuntu/home/chewoo/Development/code/phase-1-building-simple-liker/index.html")
  .then(function(){
    //if EMPTY_HEART, change to FULL_HEART AND CHANGE COLOR BY CLASS, else if FULL_HEART, change to EMPTY_HEART and change class if any to remove color
    if (heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.className = "activated-heart"
    } else {
      heart.innerText = EMPTY_HEART
      heart.className = ""
    }
  })
}

for (const state of classHearts) {
  state.addEventListener("click", like)
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
