// Adding new html element to its existing container

let cont = document.querySelector('.container');
let newPara =  document.createElement("p");
newPara.textContent = "hello ! thc is is the new paragraph created by javascript";




document.querySelector('.btn').addEventListener('click'  , function(){
    cont.appendChild(newPara);
    newPara.style.color = "red";
});