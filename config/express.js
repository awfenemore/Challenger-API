const express = require('express');
bodyParser = require('body-parser');

module.exports = function(){
    const app = express();

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(bodyParser.json());
    require('../app/routes/about.server.routes.js')(app);
    return app;
};






