var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Mobilesdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Mobilesdb");
  var myobj = [
    {
        name:"galaxy s1",
        price:25000,
        availability:true
    },
    {
        name:"galaxy s2",
        price:10000,
        availability :false
    },
    {
        name:"galaxy s3",
        price:20000,
        availability:true
    },
    {
        name:"galaxy s4",
        price:30000,
        availability : false
    },
    {
        name:"galaxy s5",
        price:40000,
        availability:true
    },
    {
        name:"galaxy s6",
        price:25000,
        availability:true
    },
    {
        name:"galaxy s7",
        price:10000,
        availability :false
    },
    {
        name:"galaxy s8",
        price:20000,
        availability:true
    },
    {
        name:"galaxy s9",
        price:30000,
        availability : false
    },
    {
        name:"galaxy s10",
        price:40000,
        availability:true
    }
  ];
  dbo.collection("MobilePhones").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res);
    db.close();
  });
});