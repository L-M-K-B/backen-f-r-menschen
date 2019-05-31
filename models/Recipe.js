const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
    get: value => value.toUpperCase(),
  },
  time: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  amount: { type: String, required: true },
  ingredients: {
    type: [[String]],
    required: true,
  },
  shortDescription: { type: [String], required: true },
  tags: { type: [String], required: true },
  titleImage: { type: String, required: true },
});

module.exports = mongoose.model('Recipe', recipeSchema);
