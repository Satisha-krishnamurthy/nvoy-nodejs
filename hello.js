const express = require('express')
const os = require('os')
var Log = require('log')
  , log = new Log('info');

log.debug('preparing email');
log.info('sending email');


const app = express()

log.error('failed to send email');

app.get('/service/:servicenumber',(req,res) => res.send('Hello from behind Envoy' + req.params['servicenumber'] +'!' + os.hostname + ': resolved' ))

app.listen(8080, "127.0.0.1")