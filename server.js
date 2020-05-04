const express = require('express.io');
const app = express();
app.http().io();
const port = 3000;

console.log('server started on port: ', port)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.io.route('ready', (req) => {
  req.io.join(req.data)
  app.io.room(req.data).broadcast('announce', {
    message: 'New client in the ' + req.data + ' room.'
  })
})

app.listen(port)