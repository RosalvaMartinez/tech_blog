//bring it in
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection')
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  });









