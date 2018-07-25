const about = require('../models/about.server.models');

exports.getAboutInfo = function(req, res){
    about.getInfo(function(done){
        if(done.ERROR){
            res.status(500);
        } else {
            res.status(200).send(done);
        }
    });
};




