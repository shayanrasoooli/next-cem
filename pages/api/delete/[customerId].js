import Customer from "../../../models/Customers";
import ConnectDB from "../../../utils/ConnectDB";

export default async function handler(req , res) {
    try {
        ConnectDB();
    } catch (error) {
        res.status(500).json({status : "failed" , message : "Error in connexting to dataBase"})
    }

    if(req.method === "DELETE") {
        const id = req.query.customerId;

            try {
                await Customer.deleteOne({_id : id})
                res.status(200).json({ status : "success" , message : "Data deleted"});
            } catch (error) {
                console.log(error.message);
                res.status(200).json({
                    status :  "failed" ,
                    message : "Error in deleting data from dataBase" ,
                })
            }
    }
}