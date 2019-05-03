var Bookkeeping = {
  // опять, не пиши на той же строке на которой открыл фигурную скобку 
  workers : [],
  newworker: function(n,a,o,s,we){
     // давай понятные имена для переменных
     // в js принято называть переменные в camelCase
     // лучше передавать объект а не кучу не понятных параметров
      if(a) this.workers.push(new Worker(n,a,o,s,we));
      else {
          var temp;
          this.workers.forEach(function(v,i){ 
              // вместо этого можно использовать array.filter
              // давай понятные имена для переменных
              if(v.name==n) temp = i;
              else temp = undefined;
          })
          if(temp) this.workers.splice(temp,1);
      }
  },
  printsorted: function(){
     // в js принято называть переменные в camelCase
      this.workers.sort(function(a,b){
          if(a.salary<b.salary) return -1;
          if(a.salary>b.salary) return 1;
          return 0;
      })
      var sum_salary = 0;
      this.workers.forEach(function(v){
            // вместо этого можно использовать array.reduce
            sum_salary+=v.salary;
          v.print();
      })
      console.log('Total salary: '+sum_salary);
  },
  printminmax: function(){
     // в js принято называть переменные в camelCase
      var mins = this.workers[0].salary,
      maxs = 0, avers = 0, imin = 0, imax;
      this.workers.forEach(function(v, i){
          if(v.salary < mins) {
              mins = v.salary;
              imin = i;
          }
          if(v.salary > maxs) {
              maxs = v.salary;
              imax = i;
          }
          avers += v.salary;
      })
      avers /= this.workers.length;
      console.log('Min salary: ');
      this.workers[imin].print();
      console.log('Max salary: ');
      this.workers[imax].print();
      console.log('Average salary: '+avers);
  },
  printoffice: function(off_name){
     // в js принято называть переменные в camelCase
      var off_workers = this.workers.filter(function(x){return x.office==off_name}); // предпочтительно ===
      var total_sal = 0, avers = 0,
      aver_age = 0, max_we = 0, i_we;
      off_workers.forEach(function(v,i){
          total_sal += v.salary;
          aver_age += v.age;
          if(max_we < v.we) i_we = i;
      })
      avers = total_sal / off_workers.length;
      aver_age /= off_workers.length;
      console.log('Office name: '+off_name);
      console.log('Total salary: '+total_sal);
      console.log('Average salary: '+avers);
      console.log('Number of workers: '+off_workers.length);
      console.log('Average age: '+aver_age);
      console.log('Maximal work experience: ');
      off_workers[i_we].print();
  }
};

function Worker(name, age, office, salary, we)
{
  this.name = name;
  this.age = age;
  this.office = office;
  this.salary = salary;
  this.we = we;
  this.print = function(){
      console.log(this.name+'-'+this.age+'-'+this.office+'-'+this.salary+'-'+this.we);
      // console.log(`${this.name}-${this.age}-${this.office}-${this.salary}-${this.we}`); 
      // из ES6 в фигурных скобках выполнится любой js код и результат подставится в шаблон
      // профитнее потому что создаётся 1 строка сразу, в примере с конкатенацией каждый раз создаётся новая
  }
}

Bookkeeping.workers = [
  new Worker('Ivan',21,'IT',1000,12),
  new Worker('Erzhan',23,'Marketing', 1500, 18),
  new Worker('Vlad',24,'Canteen',200,36)
]

Bookkeeping.workers[0].print();
Bookkeeping.newworker('Rovshan',21,'IT',450,1);
Bookkeeping.workers[Bookkeeping.workers.length-1].print();
Bookkeeping.newworker('Ivan');
Bookkeeping.workers[0].print();
console.log('-------------------');
Bookkeeping.printsorted();
console.log('-------------------');
Bookkeeping.printminmax();
console.log('-------------------');
Bookkeeping.printoffice('IT');