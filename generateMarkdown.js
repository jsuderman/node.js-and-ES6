// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.project}
    ## Description 
    ${data.description.response}
    ## table of contents
    Installation
    Usage
    License
    Contributing
    Tests
    Questions
    ## ${data.installations}
    ${data.installations.response}
    ## ${data.usage}
    ${data.usage.response}
    ## License
    ${data.license.response}
    ## Contributing
    ${data.contirbution.response}
    ## Test
    ${data.tests.response}
    ## Questions
    Any questions? please find me at [here](https://github.com/${data.github.response})
  
  `;
}

module.exports = generateMarkdown;
