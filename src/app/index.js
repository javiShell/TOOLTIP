
const port = process.env.PORT || 3000,
express = require('express'),
app = express(),
db = require('./BACKEND/models'),
cors = require('cors'),
bodyparser = require('body-parser'),
passport = require('passport'),
localStrategy = require('./BACKEND/passport/local');


const path = require('path');

app.use(express.static(__dirname+'/dist/ng-blog'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/tooltip/index.html'));
});

app.listen(process.env.PORT || 8080);


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

passport.use('local', localStrategy);
app.use(passport.initialize());

app.use('/auth', require('./BACKEND/routes/auth'))

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}...`);
});

db.sequelize
.sync({force: false})
.then(() => console.log('Conectado a la base de datos'))
.catch((e) => console.log(`Error => ${e}`));