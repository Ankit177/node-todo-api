//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb') //object destructring syntax

//object destructring syntax
/* var user={name:'abc',age:23}
var {name}=user;
console.log(name) */
// var obj=new ObjectID();
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('Unable to connect to mongodb server')
    }
    console.log('connected to mongdb server')
    var dbo=db.db("TodoApp")
    // dbo.collection("todos").insertOne({
    //     text:'Something to do',
    //     completes:false
    // },(err,result)=>{
    //     if(err){
    //        return console.log('unable to write data')
    //     }
    //     console.log(result.ops)
    // })
    // dbo.collection("users").insertOne({
    //     name:'ankit',
    //     age:24,
    //     location:'Ranchi'
    // },(err,result)=>{
    //     if(err){
    //        return console.log('unable to write data')
    //     }
    //     console.log(result.ops[0]._id.getTimestamp())
    // })
    
     db.close();
})