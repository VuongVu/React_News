const bcrypt = require('bcryptjs');

module.exports = {
  genSalt: (rounds = 10) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(rounds, (err, salt) => {
        if (err) {
          reject(err);
        }

        resolve(salt);
      });
    });
  },

  hash: (string, salt) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(string, salt, (err, hash) => {
        if (err) {
          reject(err);
        }

        resolve(hash);
      });
    });
  }
};
