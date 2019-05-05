var Bookkeeping = {
    workers : [],
    newworker(name, age, office, salary, workExperience){
        if(arguments.length > 1) this.workers.push(new Worker(name, age, office, salary, workExperience));
        if(arguments.length = 1) {
            var temp = this.workers.indexOf(name);
            if(temp) this.workers.splice(temp,1);
        }
    },
    printsorted(){
        this.workers.sort((a,b) => {
            if(a.salary < b.salary) return -1;
            if(a.salary > b.salary) return 1;
            return 0;
        })
        var sumSalary = 0;
        this.workers.forEach((value) => {
            sumSalary += value.salary;
            value.print();
        })
        console.log(`Total salary: ${sumSalary}`);
    },
    printminmax(){
        var minSalary = this.workers[0].salary,
        maxSalary = 0, averageSalary = 0, indexOfMin = 0, indexOfMax;
        this.workers.forEach((value, index) => {
            if(value.salary < minSalary) {
                minSalary = value.salary;
                indexOfMin = index;
            }
            if(value.salary > maxSalary) {
                maxSalary = value.salary;
                indexOfMax = index;
            }
            averageSalary += value.salary;
        })
        averageSalary /= this.workers.length;
        console.log('Min salary: ');
        this.workers[indexOfMin].print();
        console.log('Max salary: ');
        this.workers[indexOfMax].print();
        console.log(`Average salary: ${averageSalary}`);
    },
    printoffice(offName){
        var totalSalary = 0, averageSalary = 0,
        averageAge = 0, maxWorkExperience = 0, indexOfMaxWorkExperience;
        var offWorkers = this.workers.filter(x => x.office==offName).forEach((value, index) => {
            totalSalary += value.salary;
            averageAge += value.age;
            if(maxWorkExperience < value.workExperience) indexOfMaxWorkExperience = index;
        });
        averageSalary = totalSalary / offWorkers.length;
        averageAge /= offWorkers.length;
        console.log(`Office name: ${offName}`);
        console.log(`Total salary: ${totalSalary}`);
        console.log(`Average salary: ${averageSalary}`);
        console.log(`Number of workers: ${offWorkers.length}`);
        console.log(`Average age: ${averageAge}`);
        console.log(`Maximal work experience: `);
        offWorkers[indexOfMaxWorkExperience].print();
    }
};

function Worker(name, age, office, salary, workExperience)
{
    this.name = name;
    this.age = age;
    this.office = office;
    this.salary = salary;
    this.workExperience = workExperience;
}

Worker.prototype.print = function () { console.log(`${this.name} - ${this.age} - ${this.office} - ${this.salary} - ${this.workExperience}`)};
// Worker.prototype.print = () => {console.log(this); console.log(`${this.name} - ${this.age} - ${this.office} - ${this.salary} - ${this.workExperience}`) }; // контекст тот что знаружи

Bookkeeping.workers = [
    new Worker('Ivan', 21, 'IT', 1000, 12),
    new Worker('Erzhan', 23, 'Marketing', 1500, 18),
    new Worker('Vlad', 24, 'Canteen', 200, 36)
]

// Bookkeeping.workers[0].print.bind(Bookkeeping.workers[0])();
Bookkeeping.workers[0].print();

// Bookkeeping.newworker('Rovshan',21,'IT',450,1);
// Bookkeeping.workers[Bookkeeping.workers.length-1].print();
// Bookkeeping.newworker('Ivan');
// Bookkeeping.workers[0].print();
// console.log('-------------------');
// Bookkeeping.printsorted();
// console.log('-------------------');
// Bookkeeping.printminmax();
// console.log('-------------------');
// Bookkeeping.printoffice('IT');