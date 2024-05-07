import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes.js'; 

// Prompt the user for input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: (input) => (input.length <= 3 ? true : 'Text must be three characters or fewer'),
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or hexadecimal number for the text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or hexadecimal number for the shape color:',
    },
];

inquirer.prompt(questions).then((answers) => {
    let shape;
    if (answers.shape === 'Circle') {
        shape = new Circle();
    } else if (answers.shape === 'Triangle') {
        shape = new Triangle();
    } else if (answers.shape === 'Square') {
        shape = new Square();
    }

    shape.setColor(answers.shapeColor);

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`;

    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
});
