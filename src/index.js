const express = require('express')
const path = require('path')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const app = express()
const port = 3000


app.use(morgan('combined'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/tin-tuc', (req, res) => {
  res.render(
    'home'
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})