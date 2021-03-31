// TODO: Write code to define and export the Employee class
Employee.js

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
 
let teamMembers = [];
console.log("Welcome to the Team Generator CLI app!");
function createNewMember() {
 inquirer
   .prompt([
     {
       type: "list",
       message: "Please select the team member's rank:",
       name: "rank",
       choices: ["Manager", "Engineer", "Intern"]
     }
   ])
   .then(function(response) {
     let rank = response.rank;
     switch (rank) {
       case "Manager":
         createManager();
         break;
       case "Engineer":
         createEngineer();
         break;
       case "Intern":
         createIntern();
         break;
       default:
         console.log("There was an error, please restart the app.");
     }
   });
}
 
createNewMember();
function createManager() {
 inquirer
   .prompt([
     {
       type: "input",
       name: "name",
       message: "Please input the team member's name:"
     },
     {
       type: "input",
       name: "id",
       message: "Please input the team member's id:"
     },
     {
       type: "input",
       name: "email",
       message: "Please input the team member's email:"
     },
     {
       type: "input",
       name: "officeNumber",
       message: "Please input the team member's office number:"
     }
   ])
   .then(function(response) {
     const newManager = new Manager(
       response.name,
       response.id,
       response.email,
       response.officeNumber
     );
     teamMembers.push(newManager);
     //  console.log(teamMembers);
     inquirer
       .prompt({
         type: "confirm",
         name: "confirm",
         message: "Do you want to create another member?"
       })
       .then(function(response) {
         if (response.confirm) {
           createNewMember();
         } else {
           let htmlData = render(teamMembers);
           displayTeam(htmlData);
         }
       });
   });
}
 
function createEngineer() {
 inquirer
   .prompt([
     {
       type: "input",
       name: "name",
       message: "Please input the team member's name:"
     },
     {
       type: "input",
       name: "id",
       message: "Please input the team member's id:"
     },
     {
       type: "input",
       name: "email",
       message: "Please input the team member's email:"
     },
     {
       type: "input",
       name: "github",
       message: "Please input the team member's GitHub username:"
     }
   ])
   .then(function(response) {
     const newEngineer = new Engineer(
       response.name,
       response.id,
       response.email,
       response.github
     );
     teamMembers.push(newEngineer);
     //console.log(teamMembers);
     inquirer
       .prompt({
         type: "confirm",
         name: "confirm",
         message: "Do you want to create another member?"
       })
       .then(function(response) {
         if (response.confirm) {
           createNewMember();
         } else {
           let htmlData = render(teamMembers);
           displayTeam(htmlData);
         }
       });
   });
}
 
function createIntern() {
 inquirer
   .prompt([
     {
       type: "input",
       name: "name",
       message: "Please input the team member's name:"
     },
     {
       type: "input",
       name: "id",
       message: "Please input the team member's id:"
     },
     {
       type: "input",
       name: "email",
       message: "Please input the team member's email:"
     },
     {
       type: "input",
       name: "school",
       message: "Please input the team member's school name:"
     }
   ])
   .then(function(response) {
     const newIntern = new Intern(
       response.name,
       response.id,
       response.email,
       response.school
     );
     teamMembers.push(newIntern);
     // console.log(teamMembers);
     inquirer
       .prompt({
         type: "confirm",
         name: "confirm",
         message: "Do you want to create another member?"
       })
       .then(function(response) {
         if (response.confirm) {
           createNewMember();
         } else {
           let htmlData = render(teamMembers);
           displayTeam(htmlData);
         }
       });
   });
}
 
function displayTeam(htmlData) {
 fs.writeFile(outputPath, htmlData, function(err) {
   if (err) {
     return console.log(err);
   }
   console.log(
     "Your team Profile has been updated. Visit “team.html.”"
   );
 });
}


