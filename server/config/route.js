var bucketlist = require("../controllers/bucketlist.js");

module.exports = function(app){
  app.get("/",bucketlist.index);
  app.post("/newuser",bucketlist.newuser);
  app.get("/dashboard",bucketlist.getuser);
  app.get("/getallusers",bucketlist.getusers);
  app.post("/addbucket",bucketlist.addbucket);
  app.get("/getallbuckets",bucketlist.getallbuckets);
  app.post("/bucket/:id",bucketlist.changestatus);
  app.get("/gettagged",bucketlist.gettagged);
  app.get("/user/:id",bucketlist.single);
  app.get("/usert/:id",bucketlist.singlet);
  app.get("/getsuser/:id",bucketlist.getsuser);
}
