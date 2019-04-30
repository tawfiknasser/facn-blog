const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compression = require('compression');
const exphbs = require("express-handlebars");

const controllers = require('./controllers/index');

const app = express();

app.set('port', process.env.PORT || 3001);
app.disable('x-powered-by');
app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'assets', 'favicon.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers: helpers,
  })
)

app.use(controllers);




module.exports = app;
