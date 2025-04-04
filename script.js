
class Employee {
    constructor(name, id, department) {
        this.name = name;
        let _id = id; 
        this.department = department;

        this.getId = () => _id;
        this.setId = (newId) => { _id = newId; };
    }

    displayInfo() {
        console.log(`Employee ID: ${this.getId()}, Name: ${this.name}, Department: ${this.department}`);
    }
}


class Manager extends Employee {
    constructor(name, id, department, teamSize) {
        super(name, id, department);
        this.teamSize = teamSize;
    }

    manageTeam() {
        console.log(`${this.name} is managing a team of ${this.teamSize} people.`);
    }
    
    promoteEmployee(employee) {
        console.log(`${employee.name} has been promoted!`);
    }
 
    displayInfo() {
        console.log(`Manager ID: ${this.getId()}, Name: ${this.name}, Department: ${this.department}, Team Size: ${this.teamSize}`);
    }
}

class Intern extends Employee {
    constructor(name, id, department, duration) {
        super(name, id, department);
        this.duration = duration;
    }

    extendInternship(months) {
        this.duration += months;
        console.log(`${this.name}'s internship is now extended to ${this.duration} months.`);
    }
    
    displayInfo() {
        console.log(`Intern ID: ${this.getId()}, Name: ${this.name}, Department: ${this.department}, Duration: ${this.duration} months`);
    }
}

class PartTimeEmployee extends Employee {
    constructor(name, id, department, hourlyRate) {
        super(name, id, department);
        this.hourlyRate = hourlyRate;
    }

    calculateSalary(hoursWorked) {
        return this.hourlyRate * hoursWorked;
    }
}


const emp1 = new Employee("Alice", 101, "HR");
const emp2 = new Manager("Bob", 102, "IT", 10);
const emp3 = new Intern("Charlie", 103, "Marketing", 3);
const emp4 = new PartTimeEmployee("David", 104, "Support", 20);

emp1.displayInfo();
emp2.displayInfo();
emp2.manageTeam();
emp3.displayInfo();
emp3.extendInternship(2);
emp2.promoteEmployee(emp3);
console.log(`David's Salary: $${emp4.calculateSalary(30)}`);
