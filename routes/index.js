/*index.js
Syed Kazmi
301330922
2023-10-27
*/

// routes/index.js
const express = require('express');
const router = express.Router();

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

module.exports = router;
