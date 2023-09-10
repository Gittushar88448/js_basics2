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