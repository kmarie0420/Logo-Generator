// Inquirer import
import inquirer from "inquirer";

// File system module import
import fs from "fs";

// Importing classes from ./lib/shapes directory
import Circle from "./lib/circle.js"
import Square from "./lib/square.js"
import Triangle from "./lib/triangle.js"
import SVG from "./lib/svg.js";

// Function writes the SVG file using user answers from inquirer prompts

// This function utilizes inquirer to prompt the user to answer questions in terminal for user input
function promptUser() {
  inquirer.prompt([
      {
        type: "input",
        message: "Choose your 3 character text for logo",
        name: "text",
      },
      {
        type: "input",
        message: "Choose a text color",
        name: "textColor",
      },
      {
        type: "list",
        message: "What shape would you like the logo to be?",
        choices: ["Circle",  "Square", "Triangle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Choose your shape's color",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      // Error for text prompt (user must enter up to 3 characters)
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        if(answers.shape === "Circle") {
            var shape = new Circle()
        } else if(answers.shape === "Square") {
            var shape = new Square()
        } else if(answers.shape === "Triangle") {
            var shape = new Triangle()
        }
        shape.setColor(answers.shapeBackgroundColor)

        const svg = new SVG();
        svg.setText(answers.text, answers.textColor);
        svg.setShape(shape)
        console.log(svg)

        // Calling write file function to generate SVG file
       // writeToFile("logo.svg", answers);
      }
    });
}

// Calling promptUser function so inquirer prompts fire off when application is ran
promptUser();
