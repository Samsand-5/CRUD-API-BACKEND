import express from "express";

const router=express.Router()

router.get("getAll",()=>{
    console.log("GET");
});

export default router;