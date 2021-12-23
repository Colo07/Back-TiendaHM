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




module.exports = {
    getMugs,
    // ej deleteHoodies
};