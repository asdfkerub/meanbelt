var mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs');

mongoose.connect('mongodb://localhost/mean_exam');

var models_path = path.join(__dirname,'../models/');

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('js') >= 0 ){
    require(path.join(models_path,file));
  }
})
