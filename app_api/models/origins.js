const mongoose = require('mongoose');
const storeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true  
    },
    address: { 
        type: String,
        required:true
    },
    city: {
    type: String,
    required: true
},
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    country: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    website: {
        type: String
    }
});
const originSchema = new mongoose.Schema({
    origin: {
        type: String,
        required: true
    },
    backgroundimage: {
        contentdata: Buffer,
        type: String
    },
   stores: [storeSchema]
});
 mongoose.model('Origin', originSchema);