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
var minus = document.getElementById("minus");
var percent = document.getElementById("percent");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", event => {
        if (!temp_num) temp_num = Number(event.target.innerText);
        else temp_num = Number(temp_num + event.target.innerText);
        output.innerText = temp_num;
        console.log(temp_num);
    })
}

add.addEventListener("click", event => {
    if(!temp_res) {
        temp_res = temp_num;
        console.log(temp_res);
        temp_num = 0;
    }
    if(!temp_oper) temp_oper = event.target.innerText;
    else res.dispatchEvent(new Event("click"));
    console.log(event.target.innerText);
})

sub.addEventListener("click", event => {
    if(!temp_res) {
        temp_res = temp_num;
        console.log(temp_res);
        temp_num = 0;
    }
    if(!temp_oper) temp_oper = event.target.innerText;
    else res.dispatchEvent(new Event("click"));
    console.log(event.target.innerText);
})

mult.addEventListener("click", event => {
    if(!temp_res) {
        temp_res = temp_num;
        console.log(temp_res);
        temp_num = 0;
    }
    if(!temp_oper) temp_oper = event.target.innerText;
    else res.dispatchEvent(new Event("click"));
    console.log(event.target.innerText);
})

divide.addEventListener("click", event => {
    if(!temp_res) {
        temp_res = temp_num;
        console.log(temp_res);
        temp_num = 0;
    }
    if(!temp_oper) temp_oper = event.target.innerText;
    else res.dispatchEvent(new Event("click"));
    console.log(event.target.innerText);
})

res.addEventListener("click", event => {
    console.log(temp_res);
    switch(temp_oper)
    {
        case '+':
            temp_res += temp_num;
            output.innerText = temp_res;
            temp_oper = "";
            temp_num = 0;
            if(!event.isTrusted){
                temp_res += temp_num;
                add.dispatchEvent(new Event("click"));
            }
            break;
        case '-':
            temp_res -= temp_num;
            output.innerText = temp_res;
            temp_oper = "";
            temp_num = 0;
            if(!event.isTrusted){
                temp_res -= temp_num;
                sub.dispatchEvent(new Event("click"));
            }
            break;
        case '*':
            temp_res *= temp_num;
            output.innerText = temp_res;
            temp_oper = "";
            temp_num = 0;
            if(!event.isTrusted){
                temp_res *= temp_num;
                mult.dispatchEvent(new Event("click"));
            }
            break;
        case '/':
            temp_res /= temp_num;
            output.innerText = temp_res;
            temp_oper = "";
            temp_num = 0;
            if(!event.isTrusted){
                temp_res /= temp_num;
                divide.dispatchEvent(new Event("click"));
            }
            break;
    }
})

clear.addEventListener("click", event => {
    output.innerText = "0";
    temp_res = 0;
})

minus.addEventListener("click", event => {
    if(!temp_oper) temp_num = -temp_num;
    output.innerText = temp_num;
})

percent.addEventListener("click", event => {
    if(!temp_oper) temp_num = temp_num/100;
    output.innerText = temp_num;
})