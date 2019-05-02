var names = ['John','James','Erzhan','Ivan','Vitya'];
var cities = ['Minsk','Moscow','Kiev','Dalian','Uryupinsk'];

var peoples = [];
// создание массива логичнее вынести в функциию которое мринимает колличесво людей createArrayOfPeople

for(var i = 0, lenN = names.length, lenM = cities.length; i < lenN; i++) { 
  // скобки открываются на том же уровне " i++) {"
  // математические символы отделются пробелами с двух сторон "i < lenN"
  // нет смысла выделять память на переменные которые будут использованы лишь раз "lenN = names.length"
  var n = getRandomInt(0, lenN);
  var m = getRandomInt(0, lenM);
  peoples[i] = {
    name : names[n],
    age : getRandomInt(1, 100),
    city : cities[m],
    print : function(){
      // математические символы отделются пробелами с двух сторон " + '-' + " 'nj
      console.log(this.name + '-' + this.age + '-' + this.city);
    } 
  }; 
  // не закрывай 2 одинаковые скобки на одной строке
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


// function createArrayOfPeople( numberOfPeople, names, cities ) {
//   var peoples = [];
//   for(var i = 0; i < numberOfPeople; i++) { 
//     var n = getRandomInt(0, names.length);
//     var m = getRandomInt(0, cities.length);
//     peoples[i] = {
//       name : names[n],
//       age : getRandomInt(1, 100),
//       city : cities[m],
//       print : function() {
//         console.log(this.name + '-' + this.age + '-' + this.city);
//       }
//     };
//   }
//   return peoples; 
// }