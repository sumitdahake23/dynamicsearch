const express=require('express');
const route=express.Router();

const apimodel=require("../model/studentModel")

// route.get("/all",async(req,res)=>{
//   try{(alluser)=>res.send(alluser)}
//   catch{err=>res.send(err)}
  
// })
route.get("/all", async (req, res) => {
  try {
    const alluser = await apimodel.find();
    res.json(alluser);
  } catch (err) {
    res.json(err);
  }
});

// route.post('/addstudent',(req,res)=>{
//     const user=new apimodel({
//         fname:req.body.fname,
//         lname:req.body.lname,
//         mobno:req.body.mobno
//     })
//     user.save()
//     .then(()=>res.send(user))
//     .catch((err)=>res.send(err))
       
// })

route.post("/createuser",(req, res) => {
    const user = new apimodel({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        state:req.body.state,
        city:req.body.city,
        zip:req.body.zip
    });
    user
      .save()
      .then(() => res.send(user))
      .catch((error) => {
        res.send(error);
      });
  });

route.get("/", async (req, res) => {
    try {
      res.json("set");
    } catch (err) {
      res.json(err);
    }
  });
  



module.exports=route;