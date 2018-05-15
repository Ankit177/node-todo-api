//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb') //object destructring syntax

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('Unable to connect to mongodb server')
    }
    console.log('connected to mongdb server')
    var dbo=db.db("TodoApp")
    //delete many
    //  dbo.collection('todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //      console.log(result)
    //  })
    // dbo.collection('users').deleteMany({name:'ankit'}).then((result)=>{
    //     console.log(result)
    // })

    //detete one
    // dbo.collection('todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //        console.log(result)
    // })

    //findOneAndDelete
    // dbo.collection('todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result)
    // })

    dbo.collection('users').findOneAndDelete({_id:new ObjectID('5afaf99d5c03e8146046d3dd')}).then((result)=>{
        console.log(result)
    })


    //db.close()
})