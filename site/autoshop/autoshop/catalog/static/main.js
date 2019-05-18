var main = document.getElementById("main_content");
var statistic = document.getElementById("statistic_content");
var autosArr = [];

function mainPage(){
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

function locationHashChanged(){
    (location.hash === "#/main/") && mainPage();
    (location.hash === "#/main/") && addAutos(autosArr);
    (location.hash === "#/statistic/") && statisticPage();
}

function onLoad(){
    location.hash = "#/main/";
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

window.onload = onLoad;
window.onhashchange = locationHashChanged;

function addAutos(autosArray){
    console.log("addingAutos");
    var autos = document.getElementById("autos");
    for(let i = 0; i < autosArray.length; i++)
    {
        console.log("1");
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
        let tempAuto = document.getElementsByClassName("auto");
        tempAuto[tempAuto.length - 1].appendChild(nameAuto);
        tempAuto[tempAuto.length - 1].appendChild(priceAuto);
        tempAuto[tempAuto.length - 1].appendChild(autoImageContainer);
        tempAuto[tempAuto.length - 1].childNodes[2].appendChild(autoImage);
        tempAuto[tempAuto.length - 1].appendChild(orderAuto);
    }
}