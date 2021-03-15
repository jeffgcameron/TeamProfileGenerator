const Manager = require("../Employers/Manager");

test("Can set phone number", () => {
    const phone = "5555555555";
    const e = new Employee(phone);
    expect(e.phone).toBe(phone);
    });