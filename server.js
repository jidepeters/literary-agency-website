
							//server.js

const path = require('path');
const http = require('http');

const server = http.createServer((request, response) => {
     response.writeHead(200, {'Content-Type': 'text/plain'});
     response.end("Hello Node.js Server\n"); 
});


server.listen(8000, (err) => {
    if (err) {
       return console.log(`Server unable to start.`);
    };

    console.log(`Server is listening at port: 8000.`);
});


//Set routes

server.get('/home', (request, response) => {
    response.sendFile(path.join(_dirname, 'views', 'Home.html'),
       errorWarning();
    );
});


server.get('/about', (request, response) => {
    response.sendFile(path.join(_dirname, 'views', 'About.html'),
       errorWarning();
    );
});


server.get('/submissions', (request, response) => {
    response.sendFile(path.join(_dirname, 'views', 'Submissions.html'),
       errorWarning();
    );
});


server.get('/', (request, response) => {
    response.sendFile(path.join(_dirname, 'views/Home.html'),
       errorWarning();
    );
});


//Error Handler

errorWarning = (error) => {
   const error = new Error('Page Not Found');
   error.status = 404;

   if (error) {
      response.status(error.status || 500);
      response.end(JSON.stringify({error: `Page Not Found.`}));
   };
}
