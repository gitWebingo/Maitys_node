const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema=new Schema({
    service_id:{type:Number,required: true },
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
    serviceData:{type:String, default:null},
    service_date:{ type: Date, default:null },
    addedBy:{type:Number,default:null},
    service_status:{type: String, enum:['Pending', 'In Progress','Completed'], default:'Pending'},
    amountSettled:{type:String, enum:['No','Yes'], default:'No'},
    sattlementDate:{type:Date, default:null},
    created_at:{type:Date, default:null},
    updated_at:{type:Date, default:null},
    deleted_at:{type:Date, default:null}
})

module.exports=mongoose.model("Service", ServiceSchema);