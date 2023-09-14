// Adding new html element to its existing container

let cont = document.querySelector('.container');
let newPara =  document.createElement("p");
newPara.textContent = "hello ! thc is is the new paragraph created by javascript";




let val = document.querySelector('.btn')
val.addEventListener('click'  , function(){
    cont.appendChild(newPara);
    newPara.style.color = "red";
});


let newvalue = document.querySelector(".container");
let Vaaan =  document.createElement('button');
Vaaan.textContent = " Remove button"
newvalue.appendChild(Vaaan);

Vaaan.addEventListener('click', () => cont.removeChild(newPara));
