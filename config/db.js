const mysql = require('mysql');

let state = {
    pool: null
};

exports.connect = function(done) {
    state.pool = mysql.createPool({
        host: 'mysql3.csse.canterbury.ac.nz',                           //TODO CHANGE ALL OF THIS
        user: 'afe33',
        password: "85231542",
        database: "afe33",
        multipleStatements: true
    });
    done();
};

exports.get_pool = function() {
    return state.pool;
};