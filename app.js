/*app.js
Syed Kazmi
301330922
2023-10-27
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


