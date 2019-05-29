const mongoose = require('mongoose')

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
    iAmount: { type: Number },
    unit: { type: String },
    iName: { type: String },
  },
  shortDescription: { type: [String] },
  tags: { type: [String] },
  titleImage: { type: String },
})

module.export = mongoose.model('Recipe', recipeSchema)
