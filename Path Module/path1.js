import fs from 'fs'
import path from 'path'
//console.log(path.join(process.cwd()))
//console.log(path.join(process.cwd(),"india","bangalore"))
fs.readFile(path.join(process.cwd(),"india","bangalore","one","emp.txt"),'utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})
