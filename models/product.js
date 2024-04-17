const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema=new Schema({
    product_id:{type:Number,required: true },
    order_id:{type:String, default:null},
    vendor_id:{type:Number, default:null},
    user_id:{type:Number, default:null},
    user_type:{type:String,enum: ['Child','Parent', null], default:null},
    memberAddress:{type:Number, default:0},
    venderAddress:{type:Number, default:0},
    amount:{type:Number, default:null},
    platform_charge:{type:Number, default:null},
    gst_percentage:{type:Number, default:0},
    gst_amount:{type:Number, default:null},
    commission:{type:Number, default:0},
    final_amount:{type:Number, default:null},
    platform_type:{type:String, enum:['Razorpay',null], default:null},
    payment_status:{type:String, enum:['Pending','Success','Failed'], default:'Pending'},  
    package_id:{type:String, default:null},
    delivery_status:{type:String, enum:['Pending','Processing','Cancelled','Delevered'],default:'Pending'},
    cancelled_by:{type:String, enum:['Member','Vender',null],default:null},
    cancelled_reason:{type:String, default:null},
    amountSettled:{type:String, enum:['No','Yes'], default:'No'},
    sattlementDate:{type:Date, default:null},
    productsData:{type:String, default:null},
    created_at:{type:Date, default:null},
    updated_at:{type:Date, default:null},
    deleted_at:{type:Date, default:null}



})

module.exports=mongoose.model("Product", ProductSchema);