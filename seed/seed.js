const dotenv = require('dotenv')
dotenv.config()
var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect(process.env.LOCAL, function() {
 
  // Load Mongoose models
  seeder.loadModels(['models/products']);
 
  // Clear specified collections
  seeder.clearModels(['Product' ], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function(err,done) {
    if(err){
    console.log(err)
    }else{
        console.log("successful")
    }
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Product',
        'documents': [
            {
                item:"shirt",
                qty:1,
                price:5000,
                image:"images/shirt.jpeg",
                category:"shirt",
               
            },
            {
                item:"shirt2",
                qty:2,
                price:5000,
                image:"images/shirt2.jpeg",
                category:"shirt",
            },
            {
                item:"pants",
                qty:4,
                price:6000,
                image:"images/pants.jpeg",
                category:"trouser",
            },
            {
                item:"pants2",
                qty:2,
                price:8000,
                image:"images/pants2.jpeg",
                category:"trouser",
            },
            {
                item:"wristwatch",
                qty:2,
                price:35000,
                image:"images/wristwatch.jpeg",
                category:"wrist_watch",
            },
            {
                item:"wristwatch2",
                qty:2,
                price:40000,
                image:"images/wristwatch2.jpeg",
                category:"wrist_watch",
            },
            {
                item:"shoes1",
                qty:2,
                price:10000,
                image:"images/shoes1.jpg",
                category:"shoe",
            },
            {
                item:"shoes2",
                qty:2,
                price:25000,
                image:"images/shoes2.jpg",
                category:"shoe",
            },
            {
                item:"shoes3",
                qty:2,
                price:15000,
                image:"images/shoes3.jpg",
                category:"shoe",
            },
            


        ]
    }
];