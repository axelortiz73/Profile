import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

inquirer
  .prompt([
      /* Pass your questions in here */
      {
          message: "What is the URL to use for generating the QR code?",
          name: "URL",
      },
  ])
  .then((answers) => {
      // Use user feedback for... whatever!!
    const url = answers.URL;
    const contentToAppend = url+'\n';
      var qr_svg = qr.image(url);
      qr_svg.pipe(fs.createWriteStream(`customQR_${uuidv4()}.png`));
       console.log(answers);
    // console.log(qr);
fs.writeFile('URL.txt', contentToAppend, { flag: 'a' }, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Content has been appended to the file.');
})
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });