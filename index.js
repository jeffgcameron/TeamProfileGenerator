const inquirer = require("inquirer")
const fs = require("fs")

const Employee = require("./Employers/Employee");
const Manager = require("./Employers/Manager");
const Engineer = require("./Employers/Engineer");
const Intern = require("./Employers/Employee");

let finalTeam = [];
//funtion that prompts the user their teamname and pushes the team name into the empty array.
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "teamname",
            message: "What is your Team Name?",
        }
    ])
    .then(function() {
        addTeamMember();
    })
}

//function (called from aboves funtion) to add a manager. prompts will ask the managers information.
//then fuction would creat variable for the information and create a new manager
function addTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "confirm",
            message: "Would you like to add another team member?",
            choices: ["Yes: Manager", "Yes: Engineer", "Yes: Intern", "No"]
        }
    ])
    .then(function(data) {
        switch(data.confirm) {
            case "Yes: Manager":
                addManager();
                break;
            case "Yes: Engineer":
                addEngineer();
                break;
            case "Yes: Intern":
                addIntern();
                break;
            case "No":
                completeTeam();
                break;
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "phone",
            message: "What is your office phone number?"
        },
    ])

    .then(function(data) {
        const name = data.name
        const id = finalTeam.length + 1
        const email = data.email
        const phone = data.phone
        const newMember = new Manager(name, id, email, phone)
        finalTeam.push(newMember)
        addTeamMember()
        // console.log(finalTeam);
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your Github username?"
        },
    ])

    .then(function(data) {
        const name = data.name
        const id = finalTeam.length + 1
        const email = data.email
        const github = data.github
        const newMember = new Engineer(name, id, email, github)
        finalTeam.push(newMember)
        addTeamMember()
        // console.log(finalTeam);
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "school",
            message: "Where do you go to school?"
        },
    ])

    .then(function(data) {
        const name = data.name
        const id = finalTeam.length + 1
        const email = data.email
        const school = data.school
        const newMember = new Intern(name, id, email, school)
        finalTeam.push(newMember)
        addTeamMember()
        // console.log(finalTeam);
    })
}

function completeTeam() {
    console.log(finalTeam);
}

//switch function to go to appropriat function based on the user input

//add engineer function with prompts about the engineers info

//.then to log the input in the engineer information. create team member based on input and push to final team array. return to add team member functino

//add intern function that is called from add team memeber. prompts for intern info.

//.then to add input to a new team memeber. and push to finalteam array. fuction to return to the add team memeber function

//make team fucntion that is called when no other team member is added 

//inside this, create html file 

//call the starting function
init();
