var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/download.jpeg'){
        myImage.setAttribute('src', 'images/download01.jpeg');
    } else {
        myImage.setAttribute('src', 'images/download.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hi there, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hi there, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}



