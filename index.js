
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.port || 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home',
        title: 'Welcome Stranger'
    })
})
app.get('/products', (req, res, next) => {
    res.render('home', {
        pageTitle: 'Products',
        title: 'Products Page'
    })
})

app.listen(port, () => {
    console.log('listening at port 3000')
})