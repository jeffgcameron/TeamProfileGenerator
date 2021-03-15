const Engineer = require("../Employers/Engineer");

test("Can set github", () => {
    const git = "jeffgcameron";
    const e = new Employee(git);
    expect(e.git).toBe(git);
    });