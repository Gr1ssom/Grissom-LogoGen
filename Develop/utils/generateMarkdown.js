// Function to return license badge based on license type
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "GPL 3.0") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "BSD 3") {
    return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
  } else {
    return "";
  }
}

// Function to return license link based on license type
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else {
    return "";
  }
}

// Function to return license section of README
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

This project is licensed under the ${license} license. Click [here](${renderLicenseLink(
      license
    )}) for more information.

`;
  } else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents 

${data.tableOfContents}

## Installation

${data.installation}

## Usage 

${data.usage}

## Contribution 

${data.contribution}

## Tests 

${data.tests}

${renderLicenseSection(data.license)}

## Questions 

If you have any questions, feel free to contact me at ${data.email}. You can also visit my GitHub to view more of my work: [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
