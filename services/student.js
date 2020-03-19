var connection=require("../db/connect");


postMethod=async(data)=>{
    return new Promise((resolve,reject)=>{
        console.log(data);
        connection.query(`insert into student values('${data.id}','${data.name}','${data.age}')`,(error,result)=>{
            if(!error){
                resolve(result);
            }
            else{
                reject(error);
            }
        });
    });
}
getAllDetails=async()=>{
    return new Promise((resolve,reject)=>{
        connection.query(`select * from student`,(error,result)=>{
            if(!error){
                resolve(result);
            }
            else{
                reject(error);
            }
        });
    });
}

getById=async(id)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`select * from student where id='${id}'`,(error,result)=>{
            if(!error){
                resolve(result);
            }
            else{
                reject(error);
            }
        });
    });
}
updateMethod=async(id,name,data)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`update set name='${data}' where id='${id}'`,(error,result)=>{
            if(!error){
                resolve(result);
            }
            else{
                reject(error);
            }
        });
    });
}
deleteMethod=async(id)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`delete from student where id='${id}'`,(error,result)=>{
            if(!error){
                resolve(result);
            }
            else{
                reject(error);
            }
        });
    });
}

module.exports.postMethod= postMethod;
module.exports.getAllDetails= getAllDetails;
module.exports.getById= getById;
module.exports.updateMethod= updateMethod;
module.exports.deleteMethod= deleteMethod;