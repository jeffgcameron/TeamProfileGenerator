const Intern = require("../Employers/Intern");

test("Can set school", () => {
    const edu = "University";
    const e = new Employee(edu);
    expect(e.edu).toBe(edu);
    });