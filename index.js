// Inquirer import
var inquirer = require("inquirer");

// File system module import
const fs = require("fs");

// Importing classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
  // File starts as an empty string
  let svgString = "";
  // Sets width and height of logo container
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  // <g> tag wraps <text> tag so that user font input layers on top of polygon -> not behind
  svgString += "<g>";
  // Takes user input for shape choice and inserts it into SVG file
  svgString += `${answers.shape}`};


  // This function utilizes inquirer to prompt the user to answer questions in terminal for user input
function promptUser() {
    inquirer
      .prompt([
        {
          type: "input",
          message:
            "Choose your 3 character text for logo",
          name: "text",
        },
        {
          type: "input",
          message:
            "Choose a text color",
          name: "textColor",
        },
        {
          type: "list",
          message: "What shape would you like the logo to be?",
          choices: ["Triangle", "Square", "Circle"],
          name: "shape",
        },
        {
          type: "input",
          message:
            "Choose your shape's color",
          name: "shapeBackgroundColor",
        },
      ])
      .then((answers) => {
        // Error for text prompt (user must enter up to 3 characters)
        if (answers.text.length > 3) {
          console.log("Must enter a value of no more than 3 characters");
          promptUser();
        } else {
          // Calling write file function to generate SVG file
          writeToFile("logo.svg", answers);
        }
      });
  }
  
  // Calling promptUser function so inquirer prompts fire off when application is ran
  promptUser();