class Employees {
    #salary;
    #isHired;
    static #allEmployees = [];
    
    constructor(name, position, salary,){
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
        Employees.#allEmployees.push(this);
    }

    getSalary(){
        return this.#salary;
    }

    setSalary(amount){
        this.#salary = amount;
    }

    getStatus(){
        return this.#isHired;
    }

    setStatus(command){
        if(command === "hire"){
            this.#isHired = true;
        }else if(command === "fire"){
            this.#isHired = false;
        }
    }

    static getEmployees(){
        return Employees.#allEmployees;
    }

    static getTotalPayroll(){
        let total = 0;
        for(let i = 0; i < Employees.#allEmployees.length; i++){
            total += Employees.#allEmployees[i].getSalary;
        }
        return total;
    }
}

module.exports = {
    Employees,
}