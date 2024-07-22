import express from 'express'
import fs from 'fs'

let router=express.Router();
router.get("/read",(req,resp)=>{

})
router.post("/create",(req,resp)=>{

})
router.delete("/delete/:id",async(req,resp)=>{
    let eid=req.params.eid
    console.log(eid)
    let empoyee=await getEmployees();
    let flag=employees.find((emp)=>{
        return emp.id==eid;
    })
    if(!flag){
        return resp.status(401)/json({"msg":"Employee not exist"})
    }
    let remaining_Employees=employees.filter((emp)=>{
        return emp.eid !=emp_Id;
    })
    saveEmployees(remaining_Employees)
    return resp.status(200).json({"msg":"Employee record Deleted Succesfully!"})
})
export default router