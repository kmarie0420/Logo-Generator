// Inquirer import
import inquirer from "inquirer";

// File system module import
import { writeFile } from "fs/promises";

// Importing classes from ./lib/shapes directory
import Circle from "./lib/circle.js"
import Square from "./lib/square.js"
import Triangle from "./lib/triangle.js"
import SVG from "./lib/svg.js";

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
      // returns logo for user input 
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

        // creates a svg file
        const svg = new SVG();
        svg.setText(answers.text, answers.textColor);
        svg.setShape(shape)
        return writeFile(`./eg/${answers.shape.toLowerCase()}.svg`, svg.render());
      }

      // interactive command line
    }).then(() => {
        console.log("generated your svg")
    })
}

// Calling promptUser function so inquirer prompts fire off when application is ran
promptUser();
