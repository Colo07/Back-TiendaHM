// aca voy a tener los gets,puts,etc.. y los export como objetos en el module.exports
const models = require ("../models");
const mongoose = require ("mongoose");
const ObjectIdValidator = mongoose.Types.ObjectId;

//Get hoodies
const getHoodies= async (req,res) => {
    try {
        const response = await models.Hoodies.find();
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
 const getHoodiesById = async (req,res) => {
     try{
         const hoodieID = req.params.id;
         const isValid = ObjectIdValidator.isValid(hoodieID)
         if (!isValid) {
             return res.status(200).json({
                 msg:"El ID ingresado no corresponde a un ID generador por MongoDB"
             });
         }
        const response = await models.Hoodies.findById(hoodieID);


        if (response) {
            return res.status(200).json({
                data:response,
                error:false,
            });
        } else {
            res.status(404).json({
                msg: `El hoodie con ID ${hoodieID} no existe`,
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


// Post para hoodies
const addHoodie = async (req,res) => {
    try{
        const idHoodie = req.body.id;
        const nameHoodie = req.body.name;
        const typeHoodie = req.body.type;
        const colorHoodie = req.body.color;
        const sizeHoodie = req.body.size;  // los que son requeridos

        if (!idHoodie) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de ID del Hoodie es requerido. Por favor, ingrese el ID "
            });
        }
        if (!nameHoodie) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de nombre del Hoodie es requerido. Por favor, ingrese el nombre "
            });
        }
        if (!typeHoodie) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de tipo del Hoodie es requerido. Por favor, ingrese el tipo "
            });
        }
        if (!colorHoodie) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de color del Hoodie es requerido. Por favor, ingrese el color "
            });
        }
        if (!sizeHoodie) {
            return res.status(400).json ({
                error:true,
                msg:"El campo de size del Hoodie es requerido. Por favor, ingrese el tamaño "
            });
        }


        const hoodie = new models.Hoodies(req.body);
        await hoodie.save();
        res.status(200).json({
            data: hoodie,
            error:false
        })
    } catch (error){
        return res.status(500).json({
            msg:error,
            error:true
        });
    }
};



// Update para hoodies

const updateHoodie = async (req,res) => {
    try{
        const hoodieID = req.params.id
        const hoodie = await models.Hoodies.findByIdAndUpdate(hoodieID,req.body,{new:true});

        if  (hoodie){
            res.status(200).json ({
                error:false,
                data:hoodie
            });
        }else {
            res.status(404).json ({
                error:true,
                msg:"El hoodie no existe"
            });
        }
        
    }catch(error) {
        return res.status(500).json({
            msg:error,
            error:true
        });
    }
}; 



// DELETE PARA HOODIES

const deleteHoodie = async (req,res) => {
    try{
        const hoodieID = req.params.id;
        const response = await models.Hoodies.findByIdAndRemove(hoodieID);

        if (response) {
            res.status(200).json ({
                error:false,
                data:response,
                msg:"El hoodie fue eliminado exitosamente"
            }); 
        } else {
            res.status(400).json ({
                error:true,
                msg:"La pelicula no existe" 
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
    getHoodies,
    getHoodiesById,
    addHoodie,
    updateHoodie,
    deleteHoodie 
};