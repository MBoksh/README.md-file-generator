// TODO: Include packages needed for this application
// Added the required packages needed
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

// Questions used to create the appropriate readme file by user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What were the steps/commands taken to create this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What can this project be used for?",
  },
  {
    type: "input",
    name: "usage",
    message: "What can this project be used for?",
  },
  {
    type: "list",
    name: "license",
    message: "What license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "NONE"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Who contributed to the creation of this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Were there any tests for this project?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
// Function to create readme file
function writeToFile(fileName, data) {
  // Writes inputted data to readme file
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created readme file")
  );
}

// TODO: Create a function to initialize app
// Function initialises inquirer to ask questions to create readme file
function init() {
  inquirer
    .prompt(questions)
    // Puts user input into generateMarkdown function to create readme
    .then((data) => {
      const readMeFileUserInput = generateMarkdown(data);
      //Answers are written to the readme file created
      writeToFile("./generated-readme/README.md", readMeFileUserInput);
    });
}

// Function call to initialize app
init();
