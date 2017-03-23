var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bucketlist = mongoose.model('List')
module.exports = {
  index: function(req,res){
    // User.remove({});
    // bucketlist.remove({});
    req.session.destroy();
    res.sendStatus(200);
  },
  newuser: function(req,res){
    var user = new User(req.body);
    user.save(function(err,data){
      if(err){
        res.status(400).send("Error creating a new user");
      }else{
        req.session.currentuser = user._id;
        res.sendStatus(200);
      }
    })
  },
  getuser : function(req,res){
    User.findOne({_id:req.session.currentuser},function(err,data){
      if(err){
        res.status(400).send("Cant Find user");
      }else{
        res.json(data);
      }
    })
  },
  getusers : function(req,res){
    User.find().exec(function(err,data){
      if(err){
        res.status(400).send("Cant Find all user");
      }else{
        res.json(data);
      }
    })
  },
  addbucket: function(req,res){
    var bucket = new Bucketlist({title:req.body.title,description:req.body.description,tagged:req.body.tagged,owner:req.session.currentuser,})
    bucket.save(function(err,data){
      if(err){
        res.status(400).send("error saving bucketlist");
      }else{
        Bucketlist.update({_id:bucket._id},{$push:{users:req.body.tagged}},function(err,data){
          if(err){
            res.status(400).send("error pushing tagged user");
          }else{
            Bucketlist.update({_id:bucket._id},{$push:{users:req.session.currentuser}},function(err,data){
              if(err){
                res.status(400).send("error pushing current user");
              }else{
                res.sendStatus(200);
              }
          })
        }
      })
    }
  })
},

//
      getallbuckets: function(req,res){
        Bucketlist.find({owner:req.session.currentuser}).populate("tagged").exec(function(err,data){
          if(err){
            res.status(400).send("Cant Find any bucketlist");
          }else{
            res.json(data);
          }
        })
      },
      changestatus: function(req,res){
        Bucketlist.update({_id:req.params.id},{$set:{status:true}},function(err,data){
          if(err){
            res.status(400).send("Cant change status");
          }else{
            res.sendStatus(200);
          }
        })
      },
      gettagged : function(req,res){
        Bucketlist.find({tagged:req.session.currentuser}).populate("tagged").exec(function(err,data){
          if(err){
            res.status(400).send("Cant Find any bucketlist");
          }else{
            res.json(data);
          }
        })
      },
      single: function(req,res){
        Bucketlist.find({tagged:req.params.id}).populate("tagged").populate('owner').exec(function(err,data){
          if(err){
            res.status(400).send("Cant Find any bucketlist");
          }else{
            res.json(data);
          }
        })
      },
      singlet: function(req,res){
        Bucketlist.find({owner:req.params.id}).populate("tagged").populate('owner').exec(function(err,data){
          if(err){
            res.status(400).send("Cant Find any bucketlist");
          }else{
            res.json(data);
          }
        })
      },
      getsuser : function(req,res){
        User.findOne({_id:req.params.id}).exec(function(err,data){
          if(err){
            res.status(400).send("Cant Find any bucketlist");
          }else{
            res.json(data);
          }
        })
      },



}
