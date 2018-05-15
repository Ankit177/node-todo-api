//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb') //object destructring syntax

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('Unable to connect to mongodb server')
    }
    console.log('connected to mongdb server')
    var dbo=db.db("TodoApp")
    // dbo.collection('todos').findOneAndUpdate({
    //     _id:new ObjectID('5afaf4bf5c03e8146046d07c')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result)
    // })
    
    dbo.collection('users').findOneAndUpdate({
        _id:new ObjectID('5afae65615b5943b105cefdf')
    },{
        $set:{
            name:'Andrew'
        },
        $inc:{
            age:3
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result)
    })

    //db.close()
})