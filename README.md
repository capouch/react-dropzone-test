# react-dropzone-test
Showing how dropzone, React, multer, and webpack rule

To run:

    git clone https://github.com/capouch/react-dropzone-test

    npm install

You will also need to create a directory (until I figure out how to do this better)
named uploads in the root directory of the app.

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
