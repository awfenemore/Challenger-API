const about = require('../controllers/about.server.controllers');


module.exports = function(app) {
    app.route('/api/v1/about')
        .get(about.getAboutInfo)
}