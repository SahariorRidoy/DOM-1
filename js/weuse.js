function mostUsed(){
    document.body.style.backgroundColor='grey'
}

// Option 1
function handler(){
    const handlerStatusChange=document.getElementById('paraToChange');
    handlerStatusChange.innerText='Status Changed by handle button'
}


// Option 2
document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStatus=document.getElementById('paraToChange');
    handlerStatus.innerText='this is changed by second button'
})


