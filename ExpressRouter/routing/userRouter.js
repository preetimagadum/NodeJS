import express from 'express'
let router=express.Router();

/*
USAGE:read user
URL:http:localhost/8080/user/read
Method:GET
Acess Type:Public
Req Fields:None*/

router.get("/read",(req,resp)=>{
    resp.send("user Router - GET Request")
})

/*
USAGE:add product
URL:http:localhost/8080/product/add
Method:POST
Acess Type:Public
Req Fields:None*/

router.post("/add",(req,resp)=>{
    resp.send("user Router - POST Request")
})

export default router