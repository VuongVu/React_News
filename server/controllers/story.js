const storyModal = require('../models').storyModal;

/**
 * Get all stories
 * 
 * @return {Promise}
 */
const getAllStories = () => {
  return new Promise((resolve, reject) => {
    storyModal.find({}, (err, result) => {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

/**
 * Create new Story
 * 
 * @param story 
 * @return {Promise}
 */
const createStory = (story) => {
  return new Promise((resolve, reject) => {
    storyModal.save(story, (err, result) => {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

module.exports = { getAllStories, createStory };
