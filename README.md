# react-dropzone-test
Showing how dropzone, React, multer, and webpack rule

To run:

    git clone https://github.com/capouch/react-dropzone-test

    npm install

You need to create the webpack bundle:

    npm run-script build

For development purposes, you will need to run two servers; one to handle uploading
and the other for your webpack bundle:

In one window:

    npm start

In the other

    npm run-script run

Access the *development* server like this:

    http://localhost:3333

Access the *production* server thus:

    http:/localhost:3334
