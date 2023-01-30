//bring it in
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

const app = express();
const expressHandlebars = require('express-handlebars');

const PORT = process.env.PORT || 3001

app.engine('handlebars', expressHandlebars.engine(
    {defaultLayout: 'main'}
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'handlebars');
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  });









