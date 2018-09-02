const express = require('express')
const os = require('os')
const app = express()

app.get('/service/:servicenumber',(req,res) => res.send('Hello from behind Envoy : ' + req.params['servicenumber'] +' ! ' + os.hostname + ' : resolved' ))
app.listen(8080)