// aca voy a tener los gets,puts,etc.. y los export como objetos en el module.exports
const models = require ("../models");
const mongoose = require ("mongoose");
const ObjectIdValidator = mongoose.Types.ObjectId;

//Get clothes
const getClothes= async (req,res) => {
    try {
        const response = await models.Clothes.find();
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
 const getClothesbyId = async (req,res) => {
     try{
         const ClotheID = req.params.id;
         const isValid = ObjectIdValidator.isValid(ClotheID)
         if (!isValid) {
             return res.status(200).json({
                 msg:"El ID ingresado no corresponde a un ID generador por MongoDB"
             });
         }
        const response = await models.Clothes.findById(ClotheID);


        if (response) {
            return res.status(200).json({
                data:response,
                error:false,
            });
        } else {
            res.status(404).json({
                msg: `Clothe with ID ${ClotheID} does not exist`,
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


// Post para clothes
const addClothe = async (req,res) => {
    try{
        const idClothe = req.body.id;
        const nameClothe = req.body.name;
        const typeClothe = req.body.type;
        const colorClothe = req.body.color;
        const sizeClothe = req.body.size;  // los que son requeridos

        if (!idClothe) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de ID del Clothe es requerido. Por favor, ingrese el ID "
            });
        }
        if (!nameClothe) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de nombre del Clothe es requerido. Por favor, ingrese el nombre "
            });
        }
        if (!typeClothe) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de tipo del Clothe es requerido. Por favor, ingrese el tipo "
            });
        }
        if (!colorClothe) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de color del Clothe es requerido. Por favor, ingrese el color "
            });
        }
        if (!sizeClothe) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de size del Clothe es requerido. Por favor, ingrese el tamaño "
            });
        }


        const clothe = new models.Clothes(req.body);
        await clothe.save();
        res.status(200).json({
            data: clothe,
            error:false
        })
    } catch (error){
        return res.status(500).json({
            msg:error,
            error:true
        });
    }
};



// Update para clothes

const updateClothes = async (req,res) => {
    try{
        const clotheID = req.params.id
        const clothe = await models.Clothes.findByIdAndUpdate(clotheID,req.body,{new:true});

        if  (clothe){
            res.status(200).json ({
                error:false,
                data:clothe
            });
        }else {
            res.status(404).json ({
                error:true,
                msg:"El clothe no existe"
            });
        }
        
    }catch(error) {
        return res.status(500).json({
            msg:error,
            error:true
        });
    }
}; 



// DELETE PARA CLOTHES

const deleteClothe = async (req,res) => {
    try{
        const clotheID = req.params.id;
        const response = await models.Clothes.findByIdAndRemove(clotheID);

        if (response) {
            res.status(200).json ({
                error:false,
                data:response,
                msg:"El clothe fue eliminado exitosamente"
            }); 
        } else {
            res.status(400).json ({
                error:true,
                msg:"Clothe no existe" 
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
    getClothes,
    getClothesbyId,
    addClothe,
    updateClothes,
    deleteClothe 
};