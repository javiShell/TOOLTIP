
const port = process.env.PORT || 3000,
express = require('express'),
app = express(),
db = require('./models'),
cors = require('cors'),
bodyparser = require('body-parser'),
passport = require('passport'),
localStrategy = require('./passport/local');



app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

passport.use('local', localStrategy);
console.log(passport)
app.use(passport.initialize());

app.use('/auth', require('./routes/auth'))

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}...`);
});

db.sequelize
.sync({force: false})
.then(() => console.log('Conectado a la base de datos'))
.catch((e) => console.log(`Error => ${e}`));