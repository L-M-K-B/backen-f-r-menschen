const app = express()
  app.use(express.json())
  app.use(express.static(path.join(__dirname, 'build')))

  app.listen(process.env.PORT || 4000, err => {
    err ? console.log(err) : console.log('Server ready')
  })

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

  return app
}
