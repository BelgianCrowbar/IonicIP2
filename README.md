Voor SERVER
Procfile -> web: node server.js
server.js -> var express = require('express');
             var app = express();
             
             app.use(express.static(__dirname + "/www"));
             app.listen(process.env.PORT || 5000);
.gitignore weg -> www/
