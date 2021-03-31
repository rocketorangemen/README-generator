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
    badge = "No badge present";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
