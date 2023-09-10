// function myFunction() {
//     const element = document.getElementById("myP");
//     element.outerHTML = "<h2>This is a h2 element.</h2>";
// }

// Adding Event properties


function eventFunction() {
    console.log('I have clicked on the docuemnt');
}

document.addEventListener('click', eventFunction);

document.removeEventListener('click', eventFunction);

const content = document.querySelector('#wrapper');

content.addEventListener('click', function(event) {
    console.log(event);
})


// Adding append child and event properties


let links = document.querySelectorAll('p');
let thirdLink = links[2];

thirdLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('maza aaya, accha laga');
});

let myDiv = document.createElement('div');

function paraStatus(event) {
    console.log('Para ' + event.target.textContent);
}
myDiv.addEventListener('click', paraStatus);

for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
