// aca voy a tener los gets,puts,etc.. y los export como objetos en el module.exports

const getMugs= async (req,res) => {
    try {
        const response = await models.Mugs.find();
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
const getMugsByID = async (req,res) => {
    try{
        const mugID = req.params.id;
        const isValid = ObjectIdValidator.isValid(mugID)
        if (!isValid) {
            return res.status(200).json({
                msg:"El ID ingresado no corresponde a un ID generador por MongoDB"
            });
        }
       const response = await models.Mugs.findById(mugID);


       if (response) {
           return res.status(200).json({
               data:response,
               error:false,
           });
       } else {
           res.status(404).json({
               msg: `Mug con ID ${mugID} no existe`,
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
const addMug = async (req,res) => {
   try{
       const mugID = req.body.id;
       const nameMug = req.body.name;
       const typeMug = req.body.type;
       const colorMug = req.body.color;
       const sizeMug = req.body.size;  // los que son requeridos

       if (!mugID) {
           return res.status(400).json ({
               error:true,
               msg:"El campo de ID de mug es requerido. Por favor, ingrese el ID "
           });
       }
       if (!nameMug) {
           return res.status(400).json ({
               error:true,
               msg:"El campo de nombre del mug es requerido. Por favor, ingrese el nombre "
           });
       }
       if (!typeMug) {
           return res.status(400).json ({
               error:true,
               msg:"El campo de tipo del mug es requerido. Por favor, ingrese el tipo "
           });
       }
       if (!colorMug) {
           return res.status(400).json ({
               error:true,
               msg:"El campo de color del mug es requerido. Por favor, ingrese el color "
           });
       }
       if (!sizeMug) {
           return res.status(400).json ({
               error:true,
               msg:"El campo de size del mug es requerido. Por favor, ingrese el tamaño "
           });
       }


       const mug = new models.Mugs(req.body);
       await mug.save();
       res.status(200).json({
           data: mug,
           error:false
       })
   } catch (error){
       return res.status(500).json({
           msg:error,
           error:true
       });
   }
};



// Update para mugs

const updateMug = async (req,res) => {
   try{
       const mugID = req.params.id
       const mug = await models.Hoodies.findByIdAndUpdate(mugID,req.body,{new:true});

       if  (mug){
           res.status(200).json ({
               error:false,
               data:mug
           });
       }else {
           res.status(404).json ({
               error:true,
               msg:"mug no existe"
           });
       }
       
   }catch(error) {
       return res.status(500).json({
           msg:error,
           error:true
       });
   }
}; 



// DELETE PARA mugs

const deleteMug = async (req,res) => {
   try{
       const mugID = req.params.id;
       const response = await models.Mugs.findByIdAndRemove(mugID);

       if (response) {
           res.status(200).json ({
               error:false,
               data:response,
               msg:"Mug eliminado exitosamente"
           }); 
       } else {
           res.status(400).json ({
               error:true,
               msg:"Mug no existe" 
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
    getMugs,
    getMugsByID,
    addMug,
    updateMug,
    deleteMug
};