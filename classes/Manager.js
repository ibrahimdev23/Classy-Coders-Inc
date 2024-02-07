const { Employees } = require("./Employees");

class Manager extends Employees {

    #employeesManaged
    constructor(name, positon, salary, isHired, department,employeesManaged){
        super(name, positon, salary, isHired)
        this.department = department;
        this.#employeesManaged = []
    }
    
    getEmployeesManaged(){
        return this.#employeesManaged
    }
    setEmployeesManaged(employee){
        this.#employeesManaged.push(employee)
    }

    
}

module.exports = {
    Manager,
}