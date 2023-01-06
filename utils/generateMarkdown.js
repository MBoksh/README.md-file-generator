// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Function creates the chosen license badge and renders it to the readme file
function renderLicenseBadge(license) {
  if (license !== 'NONE') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Function that renders the link of the license
function renderLicenseLink(license) {
  if (license !== 'NONE') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'NONE') {
    return `## License
    This license for this project is: ${license}`;
    }
    return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
