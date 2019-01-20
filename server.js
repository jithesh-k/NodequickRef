const express = require('express')
var cors = require('cors')
const app = express()
var bunyan = require('bunyan');

var config = require('./config.js');

app.use(cors);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(config.get('port'), () => console.log('Example app listening on port '+config.get('port')+'!'));
var log = bunyan.createLogger({name: 'myapp'});
log.info('hi');
log.warn({lang: 'fr'}, 'au revoir');
