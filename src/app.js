const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compression = require('compression');
const exphbs = require('express-handlebars');
const helper = require('./views/helpers');
const controllers = require('./controllers/index');


const app = express();

app.set('port', process.env.PORT || 3005);
app.disable('x-powered-by');
app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'public', 'assets', 'favicon.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views', 'layouts')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers: helper,
  })
);

app.use(controllers);

module.exports = app;
