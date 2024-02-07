const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees {

    #programmingLanguages = []
    constructor(name, position, salary, isHired, programmingLanguages){
        super(name, position,salary, isHired)
        this.#programmingLanguages = programmingLanguages ;

    }

    getProgrammingLanguages(){
        return this.#programmingLanguages
    }
    setProgrammingLanguage(language){
         this.#programmingLanguages.push(language)
    }
    
}

module.exports = {
    SoftwareEngineer,
}