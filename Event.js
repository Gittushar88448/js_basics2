// let element = document.querySelector('.btn');

// function abcd() {  

//      console.log("Heellllooooo..!");
// }
// element.addEventListener('click' , abcd);

// let classBig = document.getElementById('wrapper');
// let newElement = document.createElement('button');
// newElement.textContent = "remove button";
// classBig.appendChild(newElement);

// newElement.removeEventListener('click', abcd);


// // THE DEFAULT ACTION 


// let anchor = document.querySelector('a');
// anchor.addEventListener('click' , (event)=> event.preventDefault());

// AVOID TO MANY EVVENTS

// let init = performance.now()

// let element1 = document.createElement('div');

// function tex(event) {
//     console.log('clicking on para'+ event.target.te);
// }

// element1.addEventListener('click', tex);


// for (let i = 1; i <= 100; i++) {
//     let newEle = document.createElement('p');
//     newEle.textContent = 'You have clicked on para' + i;
//     element1.appendChild(newEle);
// }

// document.body.appendChild(element1);

// let final = performance.now();

// console.log(final-init);

// FRAGMENT MODEL -:

let init = performance.now()

let docFragment  = document.createDocumentFragment();

for (let i = 1; i< 101; i++){
    let doc = document.createElement('p');
    doc.innerHTML = " <p>HEllo</p> "+ i;
    docFragment.appendChild(doc);
}

document.body.appendChild(docFragment);


let final = performance.now();

console.log(final-init);