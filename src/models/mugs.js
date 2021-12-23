
// CAMBIAR LOS ATRIBUTOS POR LOS QUE APARECEN EN L BD Y BORRAR EL ID Q CREE YO A MANO
const mongoose = require ("mongoose");
const mugsSchema = mongoose.Schema ({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        //ref:"Mugs",
        required:true
    },
    name:{
      type:String,
      required:true
    },
    color: {
        type:Array,
        required:true,
        //enum: ["Dark Grey","Black"],
    },

    size: {
        type:String,
        required:true
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

module.exports = mongoose.model("Mugs",mugsSchema);
