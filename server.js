const setupServer = require('./setup-server');
const app = setupServer();

const Recipe = require('./models/Recipe');

app.get('/recipes', (req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.json(err));
});

app.post('/recipe', (req, res) => {
  Recipe.create(req.body)
    .then(recipe => res.json(recipe))
    .then(err => res.json(err));
});

app.patch('/recipe/:id', (req, res) => {
  const { id } = req.params;
  Recipe.findByIdAndUpdate(id, req.body, { new: true })
    .then(recipe => res.json(recipe))
    .then(err => res.json(err));
});

app.delete('/recipe/:id', (req, res) => {
  const { id } = req.params;
  Recipe.findByIdAndDelete(id)
    .then(recipe => res.json(recipe))
    .then(err => res.json(err));
});
