const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv').config()
const helpers = require('./utils/helpers');

const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3003;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');


const sequelize = require('./config/config');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // last one day
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// app.exphbs('handlebars', hbs.exphbs);
app.set('view exphbs', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

// app.use(require('./controllers/'));

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT} !`);
    // sequelize.sync({ force: false });
  });