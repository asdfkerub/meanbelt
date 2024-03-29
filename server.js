var express = require('express'),
    path = require('path'),
    bp = require('body-parser'),
    session = require('express-session'),
    root = __dirname,
    port = 8000,
    app = express();

app.use(session({secret:'bucketlist'}));
app.use(express.static(path.join(root,"/client")));
app.use(express.static(path.join(root,"bower_components")));
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/route.js')(app);

app.listen(port,function(){
  console.log("PORT:",port);
})
