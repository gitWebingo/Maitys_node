const Product=require('../models/product');

const createProduct=async(req,res)=>{
    try {
        const {product_id}=req.body;
        if(!product_id){
            return res.json({success:false, msg:'Send all fields'})
        }
        const existingProduct = await Product.findOne({ product_id:product_id });
        if(existingProduct){
            return res.json({success:false, msg:'Product Id already exists'})
        }
        const product=new Product(req.body);
        await product.save();
        return res.json({success:true, product:product})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
      
}
module.exports=createProduct