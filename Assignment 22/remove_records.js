var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Mobilesdb";

MongoClient.connect(url, function(err, db){
    if(err)
        throw err;
    var dbo = db.db("Mobilesdb");
    var myquery = {availability : false};

    dbo.collection("MobilePhones").deleteMany(myquery, function(err, obj){
   
    if(err)
        throw err;
    console.log(obj.result.n + ' records deleted..');
    db.close();
});

});