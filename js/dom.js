


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