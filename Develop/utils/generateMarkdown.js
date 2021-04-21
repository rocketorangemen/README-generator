let badge;
let license;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(projectData) {
  if (projectData.license === "MIT") {
    badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (projectData.license === "Apache-2.0") {
    badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (projectData.license === "Mozilla") {
    badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
  } else if (projectData.license === "ISC") {
    badge = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
  } else {
    badge = "";
  }
  return badge;
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(projectData) {
  if (projectData.license === "MIT") {
    license = "(https://opensource.org/licenses/MIT)";
  } else if (projectData.license === "Apache-2.0") {
    license = "(https://opensource.org/licenses/Apache-2.0)";
  } else if (projectData.license === "Mozilla") {
    license = "(https://opensource.org/licenses/MPL-2.0)";
  } else if (projectData.license === "ISC") {
    license = "(https://opensource.org/licenses/ISC)";
  } else {
    license = "There was no license selected."
  }
  return license;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (projectData) => {
  renderLicenseBadge(projectData);
  renderLicenseLink(projectData);

  return `
  
  ${badge}
  
  # ${projectData.title}
  
  ## Description 
  
  ${projectData.description}
  
  
  ## Table of Contents
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${projectData.install}
  ## Usage 
  ${projectData.usage}
  ## License
  This project is licensed under the ${projectData.license} license.  To learn more please visit their website at ${license}.
  ## Contributing
  ${projectData.contribute}
  ## Tests
  ${projectData.tests}
  ## Questions
  If you have further questions please check out my github page at https://github.com/${projectData.question}
  If there are further questions you can email me at ${projectData.email}.
  
  ## Demonstration
  To view a demonstration of how this application works please click here.
  
  `;
}

module.exports = generateMarkdown;