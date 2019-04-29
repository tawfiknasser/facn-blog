const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compression = require('compression');

// const controllers = require('./controllers');

const app = express();

app.set('port', process.env.PORT || 6666);
app.disable('x-powered-by');
app.use(compression());
