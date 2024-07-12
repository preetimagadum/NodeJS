import bcrypt from 'bcrypt'
let user={
    name:"Sai",
    email:'Sai@gmail.com',
    cc:'1234123412341133',
    cvv:'145',
    password:'ILoveApple'
}

let salt=bcrypt.genSaltSync(10)

let new_cc=bcrypt.hashSync(user.cc,salt)

console.log(user.cc)
console.log(new_cc)

user={...user,cc:new_cc,password:new_cc}
console.log(user)

let flag=bcrypt.compareSync("ILoveApple",user.password)

if(flag){
    console.log("Login Successs")
}
else{
    console.log("login failed")
}