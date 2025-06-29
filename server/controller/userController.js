import { where } from "sequelize";
import { UserModel } from "../postgres/postgres.js"

//GET
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

//POST
export const addEmp=async(req,res)=>{
    const {name,email,designation,empId}=req.body;
    try {
        const emp = await UserModel.findOne({where:{empId:empId}})
        if(emp==null){
            await UserModel.create(req.body);
            return res.status(201).json({message:"employee added successfully"})
        }
        return res.status(200).json({message:"employee is already added"})
    } catch (error) {
        return res.status(500).json({"error":"Internal server error"})
    }
}

//PUT
export const updateEmp=async(req,res)=>{
    let empId=req.params.empId;
    try {
        const emp = await UserModel.update(res.body,{where:{empId}})
        if(emp[0]==0){
            return res.status(404).json({message:"not found"})
        }
        return res.status(200).json({message:"updated successfully"})
    } catch (error) {
        return res.status(500).json({"error":"Internal server error"})
    }
}

//DELETE
export const deleteEmp=async(req,res)=>{
    let empId=req.params.empId;
    try {
        const emp = await UserModel.findOne({where:{empId:empId}})
        if(emp==null){
            return res.status(404).json({message:"employee not found"})
        }
        await emp.destroy()
        return res.status(200).json({message:"employee deleted successfully"})
    } catch (error) {
        return res.status(500).json({"error":"Internal server error"})
    }
}