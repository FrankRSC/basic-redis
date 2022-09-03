const express = require('express');
const responseTime = require('response-time');
require('./middleware/redis')

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(responseTime());

app.use('/api/characters', require('./routes/characters.routes'));

app.listen(3000)

console.log('listen on port 3000')