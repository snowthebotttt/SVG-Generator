const { Shape, Circle, Triangle, Square } = require("./shapes"); // Importing the Shape and its subclasses from the shapes.js file
const fs = require("fs"); // Importing the built-in Node.js file system module
const inquirer = require("inquirer"); // Importing the inquirer module for prompting user input
// Prompt user on desired logo criteria
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",
      validate: function (value) {
        if (value.length > 3) {
          return "Please enter up to three characters";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color keyword (or a hexadecimal number) for the text:",
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape for the logo:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color keyword (or a hexadecimal number) for the shape:",
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    const ShapeClass = eval(shape.charAt(0).toUpperCase() + shape.slice(1)); // Getting the respective subclass based on the selected shape
    const shapeInstance = new ShapeClass(shapeColor); // Instantiating the selected shape object
    const svgString = shapeInstance.render(text, textColor); // Generating the SVG string using the selected shape and user input
    fs.writeFile("logo.svg", svgString, function (err) {
      // Writing the SVG string to a file
      if (err) throw err;
      console.log("Generated logo.svg");
    });
  });
