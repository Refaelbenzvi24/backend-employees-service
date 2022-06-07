# backend-employees-service

## Description

This is the backend for the employees service. <br/>
It's a RESTful API used for log employees in and to provide a list of all employees. <br/>
Built with Node.js, Express, Mongoose and Joi. <br/>
[Check the client repo!](https://github.com/Refaelbenzvi24/frontend-employees-serveice)

## Usage

    git clone git@github.com:refaelbenzvi24/backend-employees-service.git
    cd backend-employees-service
    npm install
    cp .env.example .env

- ```npm run dev```: Run the server in development mode
- ```npm run build```: Build the server for production:
- ```npm run start```: Start the server in production mode:
- ```npm run test```: Run Tests:
- ```npm run docs```: Create API documentation:
- ```npm run docker:prod```: Build and run the docker image for production.
- ```npm run docker:dev```: Build and run the docker image for development - required for development, to have a MongoDB
  server.

> Note: No solution was built for writing data into the DB, the data must be inserted manually!
