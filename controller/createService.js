const Service=require('../models/service');

const createService=async(req,res)=>{
    try {
        const {service_id}=req.body;
        if(!service_id){
            return res.json({success:false, msg:'Send all fields'})
        }
        const existingService = await Service.findOne({ service_id:service_id });
        if(existingService){
            return res.json({success:false, msg:'Service Id already exists'})
        }
        const service=new Service(req.body);
        await service.save();
        return res.json({success:true, service:service})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
      
}
module.exports=createService