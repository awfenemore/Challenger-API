const about = require('../models/about.server.models');

exports.getAboutInfo = function(req, res){
    console.log('hhhhh');
    about.getInfo(function(done){
        console.log('**********************');
        console.log(done);
        if(done.ERROR){
            res.status(500);
        } else {
            res.status(200).send(done);
        }
    });
};




