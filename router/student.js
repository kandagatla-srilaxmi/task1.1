const express=require('express');
const router=express.Router();
const callService=require('../services/student');

router.post('/insert',async(req,res)=>{
    try{
        let id=req.body.id;
        let name=req.body.name;
        let age=req.body.age;
        data={
            id:id,
            name:name,
            age:age,
        }
        
        await callService.postMethod(data);
        res.send("inserted sucessfully");
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
        res.send(result);
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
        if(name!=undefined){
            let result=await callService.updateMethod(id,"name",name);
        }
        if(age!=undefined){
            let result=await callService.updateMethod(id,"age",age);
        }
        res.send(result);
    }
    catch(error){
        res.send(error);
    }
});

router.delete("/delete/:id",async(req,res)=>{
    try{
        let id=req.params.id;
        let result = await callService.deleteMethod(id);
        console.log(result);
        res.send("deleted successfully");
    }
    catch(error){
        res.send(error);
    }
});


// router.delete("/delete/:id",async (req,res)=>{
//     try {
//         let id = req.params.id;
//         await callService.deleteMethod(id);
//         res.send("deleted sucessfully");
//     } catch (error) {
//         console.log(error);
//     }
// })


module.exports=router;