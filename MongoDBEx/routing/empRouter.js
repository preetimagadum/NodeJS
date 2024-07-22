import express from "express";
import EmployeeModel from '../models/Employee.js'


let router=express.Router();

//URL:localhost:5500/emp/
//Method:GET
router.get("/",(req,resp)=>{
 resp.status(200).json({"msg":"Employee Root Request"})
})

//URL:localhost:5500/emp/read
//GET:GET
router.get("/read", async (req,resp)=>{
    try{
        let employees= await EmployeeModel.find();
        return resp.status(200).json(employees);
    }
    catch(err){
        return resp.status(401).json({"error message":err.message})
    }
   
})
/*
    Usage: create new employee
    URL:http://127.0.0.1:5500/emp/create
    Method:POST
    Req Fields:eid,ename,esal
*/
router.post("/create",async (req,resp)=>{
    try{
        let emp = req.body;
        let Employee=await EmployeeModel.findOne({eid:emp.eid})
        console.log(Employee)
        if(Employee){
            return resp.status(401).json({"msg":"Employee already exits"})
        }
        Employee=new EmployeeModel(emp)
        console.log(Employee)
        await Employee.save();
        return resp.status(200).json({"msg":"Employee created Successufully"})

    }catch(err){
        return resp.status(401).json({"error message":err.message})
    }
       
})

router.put("/update/:id",async(req,resp)=>{
    try{
     let id = req.params.id;
     let emp = req.body;
     let Employee=await EmpModel.findOne({eid:emp_Id})
     if(!Employee){
        return resp.status(401).json({"msg":"Emploee does not exsist"})
     }
     await EmpModel.findByIdAndUpdate(emp_id,{$set:{ename:emp.ename , esal:emp.sal}});
     return resp.send(200).json({"msg":"Updated Successfully"})
    }
    catch(err){
        return resp.status(401).json({"err":"err.message"})
        }

    })

export default router;