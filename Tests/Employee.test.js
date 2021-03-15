const Employee = require("../Employers/Employee");

test("Can set name", () => {
const name = "Jeff";
const e = new Employee(name);
expect(e.name).toBe(name);
});

test("Can set id", () => {
    const id = "1";
    const e = new Employee(id);
    expect(e.id).toBe(id);
    });

test("Can set email", () => {
    const email = "jeffcam12@gmail.com";
    const e = new Employee(email);
    expect(e.email).toBe(email);
    });

test("Can set name", () => {
    const name = "Jeff";
    const e = new Employee(name);
    expect(e.name).toBe(name);
    });