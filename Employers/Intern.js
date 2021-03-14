const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, edu) {
        super(name, id, email)
        this.edu = edu;
        this.title = "Intern"
    }

    getSchool = () => {
        return this.edu
    }

    getRole = () => {
        return this.title;
    }
}

module.exports = Intern