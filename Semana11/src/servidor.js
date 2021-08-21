const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-middleware');
const webpackConfig = require('../webpack.config');


var app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/static', express.static(__dirname + '/dist'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.get('/', function(req, res, next) {
    res.send('Hola, 3CT');
});
app.listen(app.get('port'), () => {
    console.log('Servidor inicializado');
});