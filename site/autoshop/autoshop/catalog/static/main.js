var main = document.getElementById("main_content");
var statistic = document.getElementById("statistic_content");
var autosArr = [];
var orderId = 0;
var mapper = {"#/main/": mainPage, "#/statistic/": statisticPage, "#/order/": orderPage}

function mainPage(){
    loadAutos();
    document.getElementById("main").style.borderBottom = "6px solid orange";
    document.getElementById("statistic").style.borderBottom = "none";
    main.style.display = "";
    statistic.style.display = "none";
    console.log("Main");
}

function statisticPage(){
    document.getElementById("main").style.borderBottom = "none";
    document.getElementById("statistic").style.borderBottom = "6px solid orange";
    main.style.display = "none";
    statistic.style.display = "";
    console.log("Statistic");
}

function fillOrder(tempAutoName){
    if(document.getElementById("orderAutoName"))
    {
        document.getElementById("orderAutoName").innerHTML = tempAutoName;
    }
    else{
        var orderForm = document.getElementsByClassName("b-popup-content")[0];
        let labelName = document.createElement('label');
        labelName.htmlFor = "orderAutoName";
        labelName.innerHTML = "Автомобиль: ";
        let labelDate = document.createElement('label');
        labelDate.htmlFor = "orderDate";
        labelDate.innerHTML = "Дата доставки:";
        let autoName = document.createElement('div');
        autoName.id = "orderAutoName";
        autoName.innerHTML = tempAutoName;
        let orderDate = document.createElement('input');
        orderDate.id = "orderDate";
        orderDate.type = "date";
        let tempDiv1 = document.createElement('div');
        tempDiv1.className = "labCont";
        let tempDiv2 = document.createElement('div');
        tempDiv2.className = "labCont";
        orderForm.insertBefore(tempDiv1, orderForm.children[1]);
        orderForm.insertBefore(tempDiv2, orderForm.children[1]);
        orderForm.children[1].appendChild(labelName);
        orderForm.children[1].appendChild(autoName);
        orderForm.children[2].appendChild(labelDate);
        orderForm.children[2].appendChild(orderDate);
    }
}

function orderPage(){
    if(orderId){
        let tempAuto = autosArr.find(element => {
            return ("order" + element["name"]) == orderId;
        })
        fillOrder(tempAuto["name"])
    }
    else fillOrder("Машина не выбрана");
    document.getElementsByClassName("b-popup")[0].style.display="";
}

function locationHashChanged(){
    (mapper[location.hash] || mainPage)();
}

function loadAutos(){
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://localhost:8000/catalog/main');
    xhr.onload = function(){
        autosArr = JSON.parse(xhr.responseText);
        console.log(autosArr)
        addAutos(autosArr);
    };
    xhr.send();
}

document.getElementById("main").addEventListener("click", event => {
    location.hash = "#/main/";
})

document.getElementById("statistic").addEventListener("click", event => {
    location.hash = "#/statistic/";
})

window.onload = locationHashChanged;
window.onhashchange = locationHashChanged;

function addAutos(autosArray){
    console.log("addingAutos");
    var autos = document.getElementById("autos");
    for(let i = 0; i < autosArray.length; i++)
    {
        let auto = document.createElement('div');
        auto.className = "auto";
        autos.appendChild(auto);
        let nameAuto = document.createElement('div');
        nameAuto.className = "nameAuto";
        nameAuto.innerHTML = autosArray[i]["name"];
        let priceAuto = document.createElement('div');
        priceAuto.className = "priceAuto";
        priceAuto.innerHTML = autosArray[i]["price"];
        let autoImageContainer = document.createElement('div');
        autoImageContainer.className = "autoImageContainer";
        let autoImage = document.createElement('img');
        autoImage.id = "autoImage";
        let tempsrc = "/static/" + autosArray[i]["image"];
        console.log(tempsrc);
        autoImage.src = tempsrc;
        autoImage.alt = autosArray[i][Object.keys(autosArray[i])[1]];
        let orderAuto = document.createElement('button');
        orderAuto.className = "orderAuto";
        orderAuto.id = "order" + autosArray[i]["name"];
        orderAuto.innerHTML = "ЗАКАЗАТЬ";
        orderAuto.addEventListener('click', event => {
            orderId = event.target.id;
            location.hash = "#/order/"
        })
        let tempAuto = document.getElementsByClassName("auto");
        tempAuto[tempAuto.length - 1].appendChild(nameAuto);
        tempAuto[tempAuto.length - 1].appendChild(priceAuto);
        tempAuto[tempAuto.length - 1].appendChild(autoImageContainer);
        tempAuto[tempAuto.length - 1].childNodes[2].appendChild(autoImage);
        tempAuto[tempAuto.length - 1].appendChild(orderAuto);
    }
}

document.getElementById("orderButton").addEventListener("click", event => {
    var param1 = document.getElementById("orderAutoName").innerHTML;
    var param2 = document.getElementById("orderDate").value;
    var params = 'name=' + encodeURIComponent(param1) + '&date=' + encodeURIComponent(param2);
    console.log(params);
    if(param2){
        let xhr = new XMLHttpRequest;
        xhr.open('Post', 'http://localhost:8000/catalog/order/', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                alert(xhr.responseText);
            }
        };
        xhr.send(params);
    }
})