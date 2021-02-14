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
                'item': 'Doc1',
                'qty': 200,
                "category":"watch"
            },
            {
                'item': 'Doc1',
                'qty': 500,
                "category":"watch"
            }
        ]
    }
];