/*index.js
Syed Kazmi
301330922
2023-10-27
*/

// routes/index.js
const express = require('express');
const router = express.Router();
const pFolioUsers = require('../models/pFolioUsers');


// Home Page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' }); 
});

// About Me Page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' }); 
});

// Projects Page
router.get('/projects', (req, res) => {
  const projects = [
    // Project data here
  ];

  res.render('projects', { title: 'Projects', projects }); // 
});

// Services Page 
router.get('/services', (req, res) => {
  const services = [
    "We Development, Programming, Data Analysis"
  ];

  res.render('services', { title: 'Services', services }); 
});

// Contact Page
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' }); 
});

// Handle form submission 
router.post('/contact', (req, res) => {
  
  //redirect the user to the home page
  res.redirect('/');
});

// Login Page
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Use a promise to find a user by username and password
  pFolioUsers.findOne({ username, password })
      .then((user) => {
          if (!user) {
              // Incorrect credentials; reload the login page
              res.redirect('/login');
          } else {
              // Authentication successful; redirect to the business-contacts page
              res.redirect('/business-contacts');
          }
      })
      .catch((err) => {
          console.error(err);
          // Handle the error as needed
      });
});
router.get('/business-contacts', (req, res, next) => {
  pFolioUsers.find({}, 'name contactNumber email')
      .then((userList) => {
          res.render('business-contacts', { title: 'Business Contacts', userList });
      })
      .catch((err) => {
          console.error(err);
          // Handle the error as needed
      });
});
// Update Page - View
router.get('/update/:id', (req, res) => {
  const userId = req.params.id;
  pFolioUsers.findById(userId)
      .then((user) => {
          res.render('update', { title: 'Update Business Contact', user });
      })
      .catch((err) => {
          console.error(err);
          // Handle the error as needed
      });
});

// Handle form submission for updates (POST method)
router.post('/update/:id', (req, res) => {
  const userId = req.params.id;
  const { name, contactNumber, email } = req.body;
  pFolioUsers.findByIdAndUpdate(userId, { name, contactNumber, email })
      .then(() => {
          // Redirect to the business-contacts page
          res.redirect('/business-contacts');
      })
      .catch((err) => {
          console.error(err);
          // Handle the error as needed
      });
});
// Handle form submission for delete (POST method)
router.post('/delete/:id', (req, res) => {
  const userId = req.params.id;
  pFolioUsers.findByIdAndRemove(userId)
      .then(() => {
          // Redirect to the business-contacts page
          res.redirect('/business-contacts');
      })
      .catch((err) => {
          console.error(err);
          // Handle the error as needed
      });
});


module.exports = router;
