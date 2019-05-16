function mainPage(){
    document.getElementsByClassName("content")[0].innerText = "Главная страница";
}

function statisticPage(){
    document.getElementsByClassName("content")[0].innerText = "Статистика";
}

function locationHashChanged(){
    (location.hash === "#/main/") && mainPage();
    (location.hash === "#/statistic/") && statisticPage();
}

window.onhashchange = locationHashChanged;

document.getElementById("main").addEventListener("click", event => {
    location.hash = "#/main/";
})

document.getElementById("statistic").addEventListener("click", event => {
    location.hash = "#/statistic/";
})
