import { UserModel } from "../postgres/postgres.js"

export const getAllEmp=async(req,res)=>{
    try {
        const users=await UserModel.findAll();
        if(users.length==0){
            return res.status(200).json({"error":"user not found"})
        }
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({"error":"Internal server error"})
    }
}