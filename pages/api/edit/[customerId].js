import ConnectDB from "../../../utils/ConnectDB";
import Customer from "../../../models/Customers";


export default async function handler(req , res) {
    try {
        ConnectDB();
    } catch (error) {
        res.status(500).json({status : "failed" , message : "Error in connexting to dataBase"})
    }


    if (req.method === "PATCH") {
        const id = req.query.customerId;
        const data = req.body.data;

        try {
            const customer = await Customer.findOne({_id : id});
            customer.name = data.name;
            customer.lastName = data.lastName;
            customer.email = data.email;
            customer.phone = data.phone;
            customer.address = data.address;
            customer.postalCode = data.postalCode;
            customer.date = data.date;
            customer.products = data.products;
            customer.updateAt = data.now;
            customer.save();
            res.status(200).json({status : "success" , data : customer})
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ 
                status :  "failed" ,
                message : "Error in patching data from dataBase" ,
            })
        }
    }
        
}