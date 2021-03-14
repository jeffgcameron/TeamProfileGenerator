const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email)
        this.phone = phone;
        this.title = "Manager"
    }

    getRole = () => {
        return this.title;
    }
}

module.exports = Manager