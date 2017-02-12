configValues = require('./config');

module.exports = {

  getDbConnectionString: function() {
       return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds151059.mlab.com:51059/heroku_v9lvs2wp';
  }
}

