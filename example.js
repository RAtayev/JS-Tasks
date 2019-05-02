var names = ['John','James','Erzhan','Ivan','Vitya'];
var cities = ['Minsk','Moscow','Kiev','Dalian','Uryupinsk'];

var peoples = [];
for(var i = 0, lenN = names.length, lenM = cities.length; i<lenN; i++)
{
    var n = getRandomInt(0, lenN);
    var m = getRandomInt(0, lenM);
    peoples[i] = {name : names[n],
        age : getRandomInt(1, 100),
        city : cities[m],
        print : function(){
            console.log(this.name+'-'+this.age+'-'+this.city);
    }};
}

peoples.sort(function(a,b){
    if (a.age > b.age) return -1;
    if (a.age < b.age) return 1;
    return 0;
});

peoples.forEach(function(value){value.print()});

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}