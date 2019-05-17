var main = document.getElementById("main_content");
var statistic = document.getElementById("statistic_content");
var autosArr = [{name: "Renault Koleos", price: "от 50000 BYN", imSrc: "images/koleos.jpg"}];

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
    (location.hash === "#/main/") && addAutos();
    (location.hash === "#/statistic/") && statisticPage();
}

function onLoad(){
    location.hash = "#/main/";
    addAutos(autosArr);
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
        nameAuto.innerHTML = autosArray[i][Object.keys(autosArray[i])[0]];
        let priceAuto = document.createElement('div');
        priceAuto.className = "priceAuto";
        priceAuto.innerHTML = autosArray[i][Object.keys(autosArray[i])[1]];
        let autoImageContainer = document.createElement('div');
        autoImageContainer.className = "autoImageContainer";
        let autoImage = document.createElement('img');
        autoImage.id = "autoImage";
        autoImage.src = autosArray[i][Object.keys(autosArray[i])[2]];
        autoImage.alt = autosArray[i][Object.keys(autosArray[i])[0]];
        let orderAuto = document.createElement('button');
        orderAuto.className = "orderAuto";
        orderAuto.id = "order" + autosArray[i][Object.keys(autosArray[i])[0]];
        orderAuto.innerHTML = "ЗАКАЗАТЬ";
        let tempAuto = document.getElementsByClassName("auto");
        tempAuto[tempAuto.length - 1].appendChild(nameAuto);
        tempAuto[tempAuto.length - 1].appendChild(priceAuto);
        tempAuto[tempAuto.length - 1].appendChild(autoImageContainer);
        tempAuto[tempAuto.length - 1].childNodes[2].appendChild(autoImage);
        tempAuto[tempAuto.length - 1].appendChild(orderAuto);
    }
}