# Email-Sender-React-Nodemailer

This is a simple React app that allows you to send emails using Nodemailer. You can enter your name, email, subject, and message, and the app will send an email to the recipient using a Node.js server. You can also see a popup message that confirms the success of the email delivery.

# How to use

To use this app, you need to have Node.js and npm installed on your machine. You also need to create a .env file in the server folder, and add your email credentials as environment variables. For example:


EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password


Then, you can follow these steps:

- Clone this repository to your local machine.
- Navigate to the server folder, and run `npm install` to install the dependencies.
- Run `npm run dev` to start the server on port 3000 OR:Run `nodemon app.js` after you have successfully installed nodemon in the server folder.Nodemon will help you keep track and watch for any changes in your app.js file or any other files in your server folder,and automatically restart the server.
- Navigate to the client folder, and run `npm install` to install the dependencies.
- Run `npm run dev` to start the client on port 5173
- Open your browser and go to http://localhost:5173 to see the app.
- Fill out the form with your name, email, subject, and message, and click the submit button.
- You should see a popup message that says "Success! Your email has been sent." and the input fields should be cleared.
- Check your email inbox or spam folder to see the email that you sent.

# Technologies used

This app is built with the following technologies:

- React: A JavaScript library for building user interfaces.
- Nodemailer: A Node.js module for sending emails.
- Reactjs-popup: A React component for creating popup windows.
- react-icons: A React component for using icons from popular icon packs.
- nodemon: A Node.js tool for automatically restarting the server when code changes.
- vite: A fast and lightweight web development tool.

# Feedback and contribution
I hope you enjoy using this app and find it useful. If you have any feedback, questions, or suggestions, please feel free to open an issue on GitHub. If you want to contribute to this project, you are welcome to fork it and make a pull request. Thank you for your interest and support. 😊
