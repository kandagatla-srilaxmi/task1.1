const express=require('express');
const router=express.Router();
const callService=require('../services/student');

router.post('/insert',async(req,res)=>{
    try{
        let id=req.body.id;
        let name=req.body.name;
        let age=req.body.age;
        let num=req.body.num;
        data={
            id:id,
            name:name,
            age:age,
            num:num,
        }
        
        await callService.postMethod(data);
        res.send({"result":"inserted sucessfully"});
    }
    catch(error){
        res.send(error);
    }

});

router.get("/getAllDetails",async(req,res)=>{
    try{
        let result=await callService.getAllDetails();
        res.send(result);
    }
    catch(error){
        res.send(error);
    }
});

router.get("/get/:id",async(req,res)=>{
    try{
        let id=req.params.id;
        let result=await callService.getById(id);
        res.send(result[0]);
    }
    catch(error){
        res.send(error);
    }
});
router.put('/update',async(req,res)=>{
    try{
        let id=req.body.id;
        let name=req.body.name;
        let age=req.body.age;
        let num=req.body.num;
        console.log(id,name,age,num);
        if(name!==undefined){
            let result=await callService.updateMethod(id,"name",name);
        }
        if(age!==undefined){
            let result=await callService.updateMethod(id,"age",age);
        }
        if(num!==undefined){
            let result=await callService.updateMethod(id,"num",num);
        }
        res.send({"result":"updated sucessfully"});
    }
    catch(error){
        res.send(error);
    }
});

router.delete("/delete/:id",async(req,res)=>{
    try{
        let id=req.params.id;
        console.log(id);
        let result = await callService.deleteMethod(id);
        
        res.send({"result":"deleted successfully"});
    }
    catch(error){
        res.send(error);
    }
});
module.exports=router;