// para que sea una u otra la atributo 
// enum: ["DC","MARVEL","ETC"]
// CAMBIAR LOS ATRIBUTOS POR LOS QUE APARECEN EN L BD Y BORRAR EL ID Q CREE YO A MANO
const mongoose = require ("mongoose");
const tshirtsSchema = mongoose.Schema ({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
       // ref:"Tshirts",
        required:true
    },
    name:{
      type:String,
      required:true
    },
    type: {
        type:Array,
        required:true
    },

    color: {
        type:Array,
        required:true,
      //  enum1: ["Purple","Black"],
    },
    size: {
        type:Array,
        required:true,
        // enum2: ["S","M","L"],
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

module.exports = mongoose.model("Tshirts",tshirtsSchema);

