const fs = require('fs');
 
module.exports = {
  response: {
    body: fs.createReadStream('./app/api/addresses.dat', {autoClose: true})
  }
}