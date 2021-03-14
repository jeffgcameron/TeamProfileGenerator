const inquirer = require("inquirer")
const fs = require("fs")

const Employee = require("./Employers/Employee");
const Manager = require("./Employers/Manager");
const Engineer = require("./Employers/Engineer");
const Intern = require("./Employers/Intern");

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
        .then(function (data) {
        const teamname = data.teamname
        finalTeam.push(teamname)
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
        //switch function to go to appropriat function based on the user input
        .then(function (data) {
            switch (data.confirm) {
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

        .then(function (data) {
            const name = data.name
            const id = finalTeam.length
            const email = data.email
            const phone = data.phone
            const newMember = new Manager(name, id, email, phone)
            finalTeam.push(newMember)
            addTeamMember()
            // console.log(finalTeam);
        })
}
//add engineer function with prompts about the engineers info
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
        //.then to log the input in the engineer information. create team member based on input and push to final team array. return to add team member function
        .then(function (data) {
            const name = data.name
            const id = finalTeam.length
            const email = data.email
            const github = data.github
            const newMember = new Engineer(name, id, email, github)
            finalTeam.push(newMember)
            addTeamMember()
            // console.log(finalTeam);
        })
}

//add intern function that is called from add team memeber. prompts for intern info.
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
            name: "edu",
            message: "Where do you go to school?"
        },
    ])
        //.then to add input to a new team memeber. and push to finalteam array. fuction to return to the add team memeber function
        .then(function (data) {
            const name = data.name
            const id = finalTeam.length
            const email = data.email
            const edu = data.edu
            const newMember = new Intern(name, id, email, edu)
            finalTeam.push(newMember)
            addTeamMember()
            // console.log(finalTeam);
        })
}

//make team fucntion that is called when no other team member is added 
function completeTeam() {
    console.log(finalTeam);
    //crreat an html file 
    const htmlArray = [];
    const beginHTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="./Assets/style.css">
        <title>${finalTeam[0]}</title>
    </head>
    
    <body>
        <div class="head">
            ${finalTeam[0]}
        </div>
        
        <div class="container">

        <div class="row">
        `

        //push beginning html into html array
    htmlArray.push(beginHTML);

    //for statment that goes through the finalteam array and creates cards for each member in the array
    for (var i = 1; i < finalTeam.length; i++) {
        let member = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${finalTeam[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${finalTeam[i].title}</h6>
            <p class="card-text">Id: ${finalTeam[i].id}</p>
            Email: <a href="mailto: ${finalTeam[i].email}" class="card-link">${finalTeam[i].email}</a> <br>`

    if(finalTeam[i].phone) {
        member += `
        Phone Number: <a class="phone" href="tel:${finalTeam[i].phone}">${finalTeam[i].phone} </a>`
    } else if(finalTeam[i].github) {
        member += `
        Github: <a class="github" href="github.com/${finalTeam[i].github}">${finalTeam[i].github} </a>`
    } else {
        member += `
        <p class="edu"> School: ${finalTeam[i].edu} </p>
        `
    };

    member+= `
    </div>
    </div>
    `

    htmlArray.push(member);
    }

    const endHTML = `
    </div>
    </body>
    </html>`

    htmlArray.push(endHTML);
    
    fs.writeFile(`${finalTeam[0]}.html`, htmlArray.join(""), function(err) {
    })
}

//call the starting function
init();
