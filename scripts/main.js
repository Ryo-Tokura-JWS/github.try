
let myImage = document.querySelector("img");

let imageCnt
imageCnt = 0;

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    imageCnt = imageCnt + 1
    if(imageCnt === 1) {
      myImage.setAttribute ('src','images/IE11.png');
    } else
    if(imageCnt === 2) {
        myImage.setAttribute ('src','images/IE16.png');
    } else
    if(imageCnt === 3) {
        myImage.setAttribute ('src','images/microsoft_edge.png');
    } else
    if(imageCnt === 4) {
        myImage.setAttribute ('src','images/IE8.png');
        imageCnt = 0
    } 
}


  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');
  
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'IE はサイコーだ... ' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'IE はサイコーだ... ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }
