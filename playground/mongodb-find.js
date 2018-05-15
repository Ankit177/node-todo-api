//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb') //object destructring syntax

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('Unable to connect to mongodb server')
    }
    console.log('connected to mongdb server')
    var dbo=db.db("TodoApp")
    // dbo.collection('todos').find({
    //     _id:new ObjectID('5afaeaf55c03e8146046cc19')
    // }).toArray().then((doc)=>{
    //     console.log('Todos')
    //      console.log(JSON.stringify(doc,undefined,2))
    // },(err)=>{
    //     console.log('unable to fetch todos',err)
    // })


    // dbo.collection('todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`)
    // },(err)=>{
    //     console.log('unable to fetch todos',err)
    // })


    dbo.collection('users').find({
        name:'ankit'
    }).toArray().then((user)=>{
        console.log('Users')
         console.log(JSON.stringify(user,undefined,2))
    },(err)=>{
        console.log('unable to fetch users',err)
    })
})