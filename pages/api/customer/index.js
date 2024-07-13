import Customer from "../../../models/Customers";
import ConnectDB from "../../../utils/ConnectDB";

export default async function handler(req , res) {
    try {
        await  ConnectDB();
    } catch (error) {
        console.log(error);
        res.status(500).json({status : "failed" , message: " Error in  connecting to dataBase"})
        return;
    }

    if(req.method === "POST"){
        const data = req.body.data;

        if (!data.name || !data.email ||!data.lastName) {
            return res.status(400).json({status: "failed" , message: "Invalid data"})
        }

        try {
            const customer = await Customer.create(data);
            res.status(201).json({status : "success" , message : "Data Created" , data: customer})
        } catch (error) {
                console.log(error);
                res.status(500).json({status : "failed" , message: " Error in  storing data in dataBase"})
        }

    }
  
}