var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Mobilesdb";

MongoClient.connect(url, function(err, db){
if(err)
    throw err;
    var dbo = db.db("Mobilesdb");

    var myobj = [
        {
            name:"galaxy s11",
            price:25000,
            availability:true
        },
        {
            name:"galaxy s12",
            price:10000,
            availability :false
        },
        {
            name:"galaxy s13",
            price:20000,
            availability:true
        },
        {
            name:"galaxy s14",
            price:30000,
            availability : false
        },
        {
            name:"galaxy s15",
            price:40000,
            availability:true
        },
    ];

    dbo.collection("MobilePhones").insertMany(myobj, function(err, res){
        if(err)
            throw err;
            console.log(res);
        db.close();
    })
    
});