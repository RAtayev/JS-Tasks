var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mult = document.getElementById("mult");
var divide = document.getElementById("divide");
var res = document.getElementById("res");
var buttons = document.getElementsByClassName("buttons");
var temp_num = 0;
var temp_oper;
var temp_res = 0;
var output = document.getElementById("output");
var clear = document.getElementById("clear");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", event => {
        temp_num = Number(event.target.innerText);
        output.innerText = event.target.innerText;
        console.log(event.target.innerText);
        if(!temp_res) {
            temp_res = temp_num;
        }
    })
}

add.addEventListener("click", event => {
    if(!temp_oper) temp_oper = event.target.innerText;
    else res.dispatchEvent(new Event("click"));
    console.log(event.target.innerText);
})

res.addEventListener("click", event => {
    console.log(temp_res);
    switch(temp_oper)
    {
        case '+':
            output.innerText = temp_res + temp_num;
            temp_oper = "";
            if(event.isTrusted) temp_res = 0;
            else {
                temp_res += temp_num;
                add.dispatchEvent(new Event("click"));
            }
            break;
    }
})

clear.addEventListener("click", event => {
    output.innerText = "0";
    temp_res = 0;
})