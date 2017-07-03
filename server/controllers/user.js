const bcrypt = require('../utils/bcrypt');
const userModal = require('../models').userModal;

/**
 * Get all users in database
 * 
 * @return {Promise}
 */
const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    userModal.find({}, (err, result) => {
      if (err) {
        reject(err);

        return;
      }

      resolve(result);
    });
  });
};

/**
 * Get user by username
 * 
 * @param username
 * @return {Promise}
 */
const getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    const query = {
      username
    };

    userModal.find(query, (err, result) => {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

/**
 * Create new user
 * 
 * @param user - new user
 * @return {Promise}
 */
const createUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    } catch (error) {
      reject(error);
    }

    userModal.save(user, (err, result) => {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

module.exports = { getAllUsers, getUserByUsername, createUser };
