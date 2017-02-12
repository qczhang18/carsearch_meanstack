configValues = require('./config');

module.exports = {

  getDbConnectionString: function() {
       return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds161475.mlab.com:61475/heroku_37vv0421';
  }

}

