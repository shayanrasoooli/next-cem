import { Schema , model , models } from "mongoose";


const CustomerSchema = Schema({
    name: {
        type : String , 
        required : true , 
        minLength : 1,
    }, 
    lastName: {
        type : String , 
        required : true,
        minLength : 1,
    },
    email: {
        type : String , 
        required : true,
        minLength : 1,
    },
    phone: String , 
    adddress : String , 
    postalCode : String , 
    products : {
        type: Array , 
        default : [],
    }, 
    createAt : {
        type : Date , 
        default: Date.now,
        immutable : true ,
    },
    updateAt : {
        type : Date , 
        default: Date.now,
    }

})


const Customer = models.Customer || model("Customer" , CustomerSchema);
export default Customer;
