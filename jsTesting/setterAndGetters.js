// add a _ it makes it a "private"

class Employee {
    constructor(name, eid, salary, title) {
        this._name = name;
        this.eid = eid;
        this.salary = salary;
        this.title = title;
    }

    get name() {
        console.log(`Getting Name`);
        return name;
    }

    set name(newName) {
        console.log(`Setting Name...`);
        this._name = newName;
    }
}

const employee1 = new Employee(`Ross`, 190, `190,000`, `Big Shot`);
console.log(employee1);
