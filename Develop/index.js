const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>Portfolio Generator</title>
</head>
<body>
    <div id="portfolio">

    </div>
    <div class="jumbotron">
        <div class="container">
            <h1 class="text-center">${answers.name}</h1>
            <h3 class="text-center">${answers.location}</h3>
            <p class="font-weight-bold text-center">${answers.bio}</p>
            <p class="font-weight-bold text-center">${answers.github}</p>
            <div class="col text-center">
                <button type="button" class="btn btn-primary">My Work</button>
            </div>
        </div>
    </div>
    <div class="container contact">
        <form>
            <h1 class="text-center">Contact Form</h1>
            <div class="form-id">
                <label for="name" class="label">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required>
            </div>
            <div class="form-id">
                <label for="email" class="label">Email</label>
                <input type="email" id="email" name="email" placeholder="Email address" required>
            </div>
            <div class="form-id">
                <label for="message" class="label">Message</label>
                <textarea type="message" id="message" name="message" placeholder="Message here ..."></textarea>
            </div>
            <div class="col text-center">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</body>
</html>`;

inquirer 
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'What is your location?',
    },
    {
      type: 'input',
      name: 'bio',
      message: 'What do you want your bio to be?',
    },

    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.appendFile('./Develop/index.html'), htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successful!')
 
  });