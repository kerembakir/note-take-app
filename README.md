![Logo of the project](http://members.chello.nl/m.van.duren/img/kusje.png)

# Note App
> A full-stack application which allows users to create a note with an uploaded file as an attachment.

Users are allowed to signup and login to their accounts. When a user signs up, they get an email with a confirmation code to login. Users can create a note with an uploaded file up to 5MB as an attachment. They can also modify and delete their note and attachment. The app is served over HTTPS on a custom domain. The backend APIs are secure and the app is responsive.

I had a great resource to guide me through the whole proces. From setting up the AWS platform, through making the serverless API to building the front-end.

Make sure to check out the excellent open source guidance from Serverless Stack.
 
## Developing

### Built With
AWS: Lambda & API Gateway for the serverless API, DynamoDB for the database, Cognito for user authentication and securing the APIs, S3 for hosting the app and file uploads, CloudFront for serving out the app, Route 53 for the domain and Certificate Manager for SSL. React.js for the single page app, React Router for routing and Bootstrap for the UI Kit.

For the backend:

* Configure an AWS account
* Create a database using DynamoDB
* Set up S3 for file uploads
* Set up Cognito User Pools to manage user accounts
* Set up Cognito Identity Pool to secure the file uploads
* Set up the Serverless Framework to work with Lambda & API Gateway
* Write the various backend APIs

For the frontend:

* Set up a project with Create React App
* Add favicons, fonts, and a UI Kit using Bootstrap
* Set up routes using React-Router
* Use AWS Cognito SDK to login and signup users
* Plugin to the backend APIs to manage the notes
* Use the AWS JS SDK to upload files
* Create an S3 bucket to upload the app
* Configure CloudFront to serve out the app
* Point the domain with Route 53 to CloudFront
* Set up SSL to serve the app over HTTPS
