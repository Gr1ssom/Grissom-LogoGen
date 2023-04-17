const fs = require('fs');
const inquirer = require('inquirer');

const generateLogo = async () => {
  // Prompt for text
  const { text } = await inquirer.prompt({
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (input) => input.length <= 3,
  });

  // Prompt for text color
  const { textColor } = await inquirer.prompt({
    type: 'input',
    name: 'textColor',
    message: 'Enter text color:',
  });

  // Prompt for shape
  const { shape } = await inquirer.prompt({
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  });

  // Prompt for shape color
  const { shapeColor } = await inquirer.prompt({
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color:',
  });

  // Generate SVG file
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect width="100%" height="100%" fill="${shapeColor}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
  fs.writeFileSync('logo.svg', svg);

  console.log('Generated logo.svg');
};

generateLogo();
