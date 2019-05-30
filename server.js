const setupServer = require('./setup-server');
const app = setupServer();

const Recipe = require('./models/Recipe');

// add your api here
app.get('/test', (req, res) => {
  res.json({ success: true });
});
