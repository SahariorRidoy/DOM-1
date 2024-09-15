// document.getElementById('list').style.backgroundColor='red';

// const list =document.querySelectorAll('#list li');
// for(const lis of list){
//     console.log(lis.innerText);
// }

const main = document.getElementById("main-container");
const section = document.createElement("section");

section.innerHTML = `
    <h1>This is dynamic added Section Title</h1>
    <ul>
    <li>Items</li>
    <li>Items</li>
    <li>Items</li>
    <li>Items</li>
    </ul>
    `;
main.appendChild(section);

// Onclick Action 2    [Important WE USE *****************************]
// Onclick Action 2    [Important WE USE *****************************]
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Onclick Action 3  
// <button onclick=makeRed()>Make Red Background</button>
const blueButton = document.getElementById("makeBlue");
blueButton.onclick = blueColor;  //this time only functionName
function blueColor() {
  document.body.style.backgroundColor = "blue";
}

// Onclick Action 4    [*****WE Use SomeTime/Rarely *****]
const purpleBtn = document.getElementById("purpleButton");
purpleBtn.onclick = function purpleMe() {
  document.body.style.backgroundColor = "purple";
};


// Onclick Action 5
// let pinkButton = document.getElementById("pinkButton");
// console.log(pinkButton);
// pinkButton = addEventListener("click", makePink);
// function makePink() {
//  document.body.style.backgroundColor = "pink";
// }



// Onclick Action 6
const makeGreenButton=document.getElementById('make-green');
makeGreenButton.addEventListener('click',function makeGreen(){
 document.body.style.backgroundColor='green';
}
)


// Onclick Action 7 [Important WE USE *******************************************]
// Onclick Action 7 [Important WE USE *******************************************]
const makeGolden=document.getElementById('make-golden').addEventListener('click', function () {
    document.body.style.backgroundColor='goldenrod'
}
)

