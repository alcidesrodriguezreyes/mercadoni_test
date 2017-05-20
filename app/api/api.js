const fs = require('fs');

module.exports = {
  response: function (ctx) {
    ctx.body = fs.createReadStream('./app/api/addresses.dat', {autoClose: true, encoding: 'utf8'});
  }
}