const fs=require('fs')
fs.readFile('users.json','utf-8',(err,data)=>{
    if(err) throw err
    let users=JSON.parse(data)
    for(user of users){
         console.log(user.name)
    }
})