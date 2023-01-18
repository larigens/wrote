<h1 align="center"> Wrote </h1>

<p align="center">
    <img src="./public/assets/favicon/apple-touch-icon.png" alt="logo" width="120px" height="120px" />
  <br>
  <i> Note Taker
    <br> built using Node.js / Express.js</i>
  <br>
</p>
<br>

![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-lightgrey.svg)
![Contributors](https://img.shields.io/github/contributors/larigens/team-up?style=plastic&color=lightgrey)
![Forks](https://img.shields.io/github/forks/larigens/team-up?style=plastic&color=lightgrey)
![Stars](https://img.shields.io/github/stars/larigens/team-up?style=plastic&color=lightgrey)
![Licence](https://img.shields.io/static/v1?label=License&message=Apache-2.0&color=lightgrey)
![Issues](https://img.shields.io/github/issues/larigens/team-up?style=plastic&color=lightgrey)

---
## Description

Wrote is a back-end application that can be used to write and save notes.

## Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
  - [Cloning the Repository](#cloning-the-repository)
  - [Prerequisites](#prerequisites)
  - [Setting Up](#setting-up)
- [Mock-Up](#mock-up)
- [Usage](#usage)
- [Tests](#tests)
  - [Prerequisites](#prerequisites-1)
  - [Running Tests](#running-tests)
- [Questions](#questions)
- [Contributing](#contributing)
  - [Contributing Guidelines](#contributing-guidelines)
  - [Code of Conduct](#code-of-conduct)
- [Credits](#credits)
  - [Acknowledgements](#acknowledgements)
  - [Links](#links)
- [License](#license)

## Installation

### Cloning the Repository

Click `<> code` - the green button. After clicking, in the local tab, copy the SSH key. Open the terminal in your Macbook or [git bash](https://git-scm.com/downloads), if you have Windows/Linux, and type:

```bash
git clone [paste ssh key]
```

I would recommend downloading [Visual Studio Code](https://code.visualstudio.com/download) to edit the code locally. If you need more information on how to clone a repository, [click here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)!

### Prerequisites

This package requires you to have [Node.js](https://nodejs.org/en/download/), npm and [Express.js](https://expressjs.com/) installed on your machine. You can install these by running the code below on your terminal:

For `npm`

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

For `Node.js`

```bash
npm i node@lts
```

For `Express.js`

```bash
npm i express
```

### Setting Up

Open the project in VS Code and make sure you are in the directory of this application and then type the command below on your terminal:

```bash
npm i
```


```bash
npm i ejs
```

## Mock-Up

The following image shows the web application's appearance:

<img src="./public/assets/images/demo.png" alt="App Screenshot" width="700px" height="342px" />

## Usage

Launch the application by entering the command below on your terminal:

```bash
npm start
```

After launching the application, the user will be presented with a landing page with a link to a notes page. If the link is clicked, it will display a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

If you need more guidance on how to use Team-Up, click [here]() for the tutorial!

## Tests

### Prerequisites

To test this application, you will need to install [Jest](https://www.npmjs.com/package/jest).

```bash
npm i jest
```

Then, add Jest as a dev dependency to the project by running:

```bash
npm install --save-dev jest
```

### Running Tests

Open your terminal, make sure you are in the directory of this application and type the command below:

```bash
npx jest
```

You should see a result like the following:

<img src="./dist/assets/images/test-demo.png" alt="Test Screenshot" width="250px" height="160px" />

All tests passed, and all four Test Suites ran without errors.

## Questions

For questions and support feel free to contact me via:

<a href="mailto:larigens@gmail.com">📧 Email </a> 

<a href="https://github.com/larigens">🐈‍⬛ GitHub </a>

## Contributing
### Contributing Guidelines

Want to report a bug, contribute some code, request a new feature, or improve the documentation? You can submit an issue and I will gladly welcome you as a contributor, but before submitting an issue, please search the issue tracker, as it may already exist!

### Code of Conduct

Our Code of Conduct follows the same principles as the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/), version 2.1.

## Credits
### Acknowledgements

- [W3 Schools](https://www.w3schools.com)
- [MDN](https://developer.mozilla.org/en-US/)
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [PaksTech](https://pakstech.com/blog/inquirer-js/)
- [README Lab](https://github.com/larigens/readme-lab)
- [Jest](https://www.npmjs.com/package/jest)

### Links

[![Portfolio](https://img.shields.io/badge/my_portfolio-000?style=flat&logo=ko-fi&logoColor=white)](https://larigens.github.io/lari-gui/)
[![Linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lari-gui/)
[![Twitter](https://img.shields.io/badge/twitter-1DA1F2?style=flat&logo=twitter&logoColor=white)](https://twitter.com/coffeebr_eak)

## License

Please refer to the [LICENSE](https://choosealicense.com/licenses/apache-2.0/) in the repo.