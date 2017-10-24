var MongoClient = require("mongodb").MongoClient

var girabbitQueryHelper = {
  url: 'mongodb://localhost:27017/four_girabbits',
  all: function (onQueryFinished) {

  MongoClient.connect(this.url, function(err, db){
    var girabbitCollection = db.collection("girabbits")

    girabbitCollection.find().toArray(function(err, docs){
      onQueryFinished(docs)
    })
  })

}
