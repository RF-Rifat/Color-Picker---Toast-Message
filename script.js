window.onload = ()=>{
    main()
}

function main (){
    const root = document.getElementById('root');
    const btn = document.getElementById("btn");
    const output = document.querySelector("#Output");
    const copyBtn = document.querySelector("#CopyBtn");

    btn.addEventListener('click',function(){
        const bgColor = clrGenarate();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });

    copyBtn.addEventListener("click",function(){
        navigator.clipboard.writeText(output.value);
        toastMessage(`${output.value} copied`)
    })
}

function clrGenarate(){
    const red = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`
}

// Toast Message
function toastMessage(msg){
    const div = document.createElement("div");
    div.innerText = msg;
    div.className = "toast-message toast-message-slide-in";
    div.addEventListener("click",function(){
        div.classList.remove("toast-message-slide-in");
        div.classList.add("toast-message-slide-out");
        div.addEventListener("animationend",function(){
            div.remove();
        })
    })
    document.body.appendChild(div);
}