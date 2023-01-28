//bring it in
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

const app = express();
const expressHandlebars = require('express-handlebars');

app.engine('handlebars', expressHandlebars.engine(
    {defaultLayout: 'main'}
));

app.use(express.static('public'));

app.set('view engine', 'handlebars');
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});










