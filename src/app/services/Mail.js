const nodemailer = require('nodemailer')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
const exphbs = require('express-handlebars')
const mailCfg = require('../../config/mail')

const transport = nodemailer.createTransport(mailCfg)

transport.use(
  'compile',
  hbs({
    viewEngine: exphbs(),
    viewPath: path.resolve(__dirname, '..', 'views', 'emails'),
    extName: '.hbs'
  })
)
module.exports = transport
