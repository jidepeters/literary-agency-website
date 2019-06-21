
							//server.js

const path = require('path');
const express = require('express');
const app = express();

app.listen(8000, (err) => {
    if (err) {
       return console.log(`Server unable to start.`);
    };

    console.log(`Server is listening at port: 8000.`);
});


//Set routes

app.get('/home', (request, response) => {
    response.sendFile(path.join(_dirname, 'views', 'Home.html'),
       errorWarning());
});


app.get('/about', (request, response) => {
    response.sendFile(path.join(_dirname, 'views', 'About.html'),
       errorWarning());
});


app.get('/submissions', (request, response) => {
    response.sendFile(path.join(_dirname, 'views', 'Submissions.html'),
       errorWarning());
});


app.get('/', (request, response) => {
    response.sendFile(path.join(_dirname, 'views/Home.html'),
       errorWarning());
});


//Error Handler

const errorWarning = () => {
   const error = new Error('Page Not Found');
   error.status = 404;

   if (error) {
      response.status(error.status || 500);
      response.end(JSON.stringify({error: `Page Not Found.`}));
   };
};

