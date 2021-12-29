const mongoose = require ("mongoose");
const clothesSchema = mongoose.Schema ({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
       // ref:"Hoodies",
        required:true
    },
    id:{
        type:String,
        required:true
      },
    name:{
      type:String,
      required:true
    },
    type: {
        type:Array,
        required:true,
     //   enum1: ["Pullover","Zip"],
        
    },

    color: {
        type:Array,
        required:true,
       // enum2: ["Red","Black","Navy"],
    },
    size: {
        type:Array,
        required:true,
        //enum3: ["S","M","L"],
    },
    price: {
        type:String,
        
    },
    imgF: {
        type:String,

    },
    imgB: {
        type:String,
    },
})

module.exports = mongoose.model("Clothes",clothesSchema);