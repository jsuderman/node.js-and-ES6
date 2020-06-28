const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// questions for users to answer to fill in a dynamically generated readme file
// const questions = [
    function promptUser() {
        return inquirer.prompt([
            {
                type: "input",
                name: "username",
                message: "what is your name?"
            },
            {
                type: "input",
                name: "github",
                message: "what is your github name?"
            },
            {
                type: "input",
                name: "project",
                message: "What is your project's name?"
            },
            {
                type: "input",
                name: "description",
                message: "please write a short description of your project"
            },
            {
                type: "list",
                name: "license",
                message: "what kind of license should your project have?",
                choices: [
                    "MIT",
                    "APACHE 2.0",
                    "GPL 3.0",
                    "BSD 3",
                    "none"
                ]
            },
            {
                type: "input",
                name: "installations",
                message: "What command should be run to install dependencies?"
            },
            {
                type: "input",
                name: "test",
                message: "What command should be run to run tests?"
            },
            {
                type: "input",
                name: "usage",
                message: "what does the user need to know about using the repo?"
            },
            {
                type: "input",
                name: "contribution",
                message: "what does the user need to know about contributing to the repo?"
            }
        ])
    }

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.project}
    ## Description 
    ${data.description} '\n'
    ## Table of Contents
    ** Installation
    ** Usage
    ** License
    ** Contributing
    ** Tests
    ** Questions '\n'
    ## Installations 
    ${data.installations} '\n' 
    ## Usage 
    ${data.usage} '\n'
    ## License
    ${data.license} '\n'
    ## Contributing
    ${data.contribution} '\n'
    ## Test
    ${data.test} '\n'
    ## Questions
    Any questions? please find me at [here](https://github.com/${data.github})
  `;
}

    async function init() {
        console.log("hi")
        try {
            const data = await promptUser();

            const md = generateMarkdown(data);
            await writeFileAsync("README.md", md);
            console.log("YES");
        } catch(err) {
            console.log(err);
        }

    }
    
init();





