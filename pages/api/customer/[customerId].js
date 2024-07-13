import ConnectDB from "../../../utils/ConnectDB";
import Customer from "../../../models/Customers";


export default async function handler(req , res) {
    try {
        await ConnectDB();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({status : " failed" , message : "Error in connecting to dataBase"});
        return;
    }


    if (req.method === "GET") {
        const id = req.query.customerId;
        try {
            const customer = await Customer.findOne({_id : id})
            res.status(200).json({status : "success" , data: customer})

        } catch (error) {
            console.log(error);
            res.status(500).json({status : "failed" , message: " Error in  storing data in dataBase"})
        }
    }
}