// aca voy a tener los gets,puts,etc.. y los export como objetos en el module.exports
const models = require ("../models");
const mongoose = require ("mongoose");
const ObjectIdValidator = mongoose.Types.ObjectId;

//Get Tshirts
const getTshirts= async (req,res) => {
    try {
        const response = await models.Tshirts.find();
        return res.status(200).json({
            data:response,
            error:false,
        });
    } catch (error){
        return res.status(500).json({
            msg:error,
            error:true
        });
    }
};
// Metodo get por ID 
const getTshirtsById = async (req,res) => {
    try{
        const tshirtID = req.params.id;
        const isValid = ObjectIdValidator.isValid(tshirtID)
        if (!isValid) {
            return res.status(200).json({
                msg:"El ID ingresado no corresponde a un ID generador por MongoDB"
            });
        }
       const response = await models.Tshirts.findById(tshirtID);

       if (response) {
           return res.status(200).json({
               data:response,
               error:false,
           });
       } else {
           res.status(404).json({
               msg: `La remera con ID ${tshirtID} no existe`,
               error:true
           })
       }
    }catch (error) {
       return res.status(500).json ({
           msg:error,
           error:true,
       });
    }
};



const addTshirt = async (req,res) => {
    try{
        const idTshirt = req.body.id;
        const nameTshirt = req.body.name;
        const typeTshirt = req.body.type;
        const colorTshirt = req.body.color;
        const sizeTshirt = req.body.size;  // los que son requeridos

        if (!idTshirt) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de ID de la remera es requerido. Por favor, ingrese el ID "
            });
        }
        if (!nameTshirt) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de nombre de la remera es requerido. Por favor, ingrese el nombre "
            });
        }
        if (!typeTshirt) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de tipo de la remera es requerido. Por favor, ingrese el tipo "
            });
        }
        if (!colorTshirt) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de color de la remera es requerido. Por favor, ingrese el color "
            });
        }
        if (!sizeTshirt) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de size de la remera es requerido. Por favor, ingrese el tamaño "
            });
        }


        const tshirt = new models.Tshirts(req.body);
        await tshirt.save();
        res.status(200).json({
            data: tshirt,
            error:false
        })
    } catch (error){
        return res.status(500).json({
            msg:error,
            error:true
        });
    } }

    // Update para tshirts

const updateTshirt = async (req,res) => {
    try{
        const tshirtID = req.params.id
        const tshirt = await models.Tshirts.findByIdAndUpdate(tshirtID,req.body,{new:true});

        if  (tshirt){
            res.status(200).json ({
                error:false,
                data:tshirt
            });
        }else {
            res.status(404).json ({
                error:true,
                msg:"Tshirt does not exist"
            });
        }
        
    }catch(error) {
        return res.status(500).json({
            msg:error,
            error:true
        });
    }
}; 



// DELETE PARA TSHIRTS

const deleteTshirt = async (req,res) => {
    try{
        const tshirtID = req.params.id;
        const response = await models.Tshirts.findByIdAndRemove(tshirtID);

        if (response) {
            res.status(200).json ({
                error:false,
                data:response,
                msg:"TShirt eliminado exitosamente"
            }); 
        } else {
            res.status(400).json ({
                error:true,
                msg:"TShirt no existe" 
            });
        }
    }catch (error){
        return res.status(500).json({
            msg:error,
            error:true
        });
         
    }
};

module.exports = {
   getTshirts,
   getTshirtsById,
   addTshirt,
   updateTshirt,
   deleteTshirt}; 