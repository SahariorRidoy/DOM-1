


    // document.getElementById('list').style.backgroundColor='red';



    // const list =document.querySelectorAll('#list li');
    // for(const lis of list){
    //     console.log(lis.innerText);   
    // }



    const main = document.getElementById('main-container');
    const section = document.createElement('section');

    section.innerHTML=`
    <h1>This is dynamic added Section Title</h1>
    <ul>
    <li>Items</li>
    <li>Items</li>
    <li>Items</li>
    <li>Items</li>
    </ul>
    `
    main.appendChild(section);


    // Onclick Action 1
    function makeRed(){
        document.body.style.backgroundColor='red';
    }

// Onclick Action 2
const blueButton= document.getElementById('makeBlue');
blueButton.onclick=blueColor;  //onclick in html called by functionName()/but this time only functionName
function blueColor() {
    document.body.style.backgroundColor='blue';
}


// Onclick Action 3
const purpleBtn=document.getElementById('purpleButton');
console.log(purpleBtn);
purpleBtn.onclick=function pupleMe(){
    document.body.style.backgroundColor='purple';
}


