// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Function creates the chosen license badge and renders it to the readme file
function renderLicenseBadge(license) {
  if (license !== "NONE") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Function that renders the link of the license
function renderLicenseLink(license) {
  if (license !== "NONE") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Function that displays the chosen license under the license section
function renderLicenseSection(license) {
  if (license !== "NONE") {
    return `## License
    The license for this project is: ${license}`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
// Function that generates the markdown for readme file
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
 
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  The license link is ${renderLicenseLink(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Any questions can be asked by contacting the GitHub user: ${data.username} 
  at the following email ${data.email}





`;
}

module.exports = generateMarkdown;
