const functions = require('firebase-functions');
const admin = require("firebase-admin");
const express = require('express');
admin.initializeApp();

const path = require("path")
const fs = require("fs").promises;


const app = express();

//creating a function to return the html based on the route
function createHtmlData(title, desp) {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000" />
    <meta name="description" content="" />
    <title>${title}</title>
    <meta name="description" content="${desp}" />
    <script defer="defer" src="/static/js/main.js"></script>
    <link href="/static/css/main.css" rel="stylesheet" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
`;
}


app.get('/', (req, res) => {
    const htmldata = createHtmlData(
        "Ravikiran Dhulipala - UX Designer",
        "I describe myself as a Developer by degree and a Designer by passion with a strong focus on people's needs"
    );
    res.send(htmldata);
})

app.get('/about-me', (req, res) => {
    const htmldata = createHtmlData(
        "Ravikiran Dhulipala - About me",
        "Meet Ravikiran Dhulipala, a UX Engineer with over two years of experience at TCS. His passion for creating user-centered designs and expertise in UX best practices drive success for clients."
    );
    res.send(htmldata);
});