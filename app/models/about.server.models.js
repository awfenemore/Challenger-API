const fs = require('fs');


exports.getInfo = function(done){
    let details = fs.readFileSync('app/files/about.txt', 'utf8');
    return done(details);
};