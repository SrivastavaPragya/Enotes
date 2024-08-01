const mongoose = require('mongoose')

 const InitDatabase=()=>{
   
mongoose.connect("mongodb+srv://admin:admin@cluster0.0fjyio3.mongodb.net/Enotes").then(() => {
    console.log("Connection is successful");
 }).catch((e)=>{
console.log(e)
 })
}

module.exports = InitDatabase;