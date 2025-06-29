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

export const addEmp=async(req,res)=>{
    const {name,email,designation,empId}=req.body;
    try {
        const user = await UserModel.findOne({where:{empId:empId}})
        if(emp==null){
            await UserModel.create(req.body);
            return res.status(201).json({message:"employee added successfully"})
        }
        return res.status(200).json({message:"employee is already added"})
    } catch (error) {
        return res.status(500).json({"error":"Internal server error"})
    }
}

export const updateEmp=async(req,res)=>{
    let empId=req.params.empId;
    try {
        
    } catch (error) {
        return res.status(500).json({"error":"Internal server error"})
    }
}