const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/checkpoint', { useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
 app= express();

const Person = require('./Models/personModel');

 app.use(express.json());

//create instance of person
 let P1 = new Person({

    name:"Skander",
    age: 22,
    favoriteFoods:['lablebi', 'Pizza']

 })

 //create multiple instances
 Person.create({

 name:"Ranim",
    age: 22,
    favoriteFoods:['lablebi', 'Loubia']

 })

  Person.create({

 name:"Aziz",
    age: 22,
    favoriteFoods:['lablebi', 'Makrouna']

 })


// save first instance created
 P1.save().then( doc =>{

         console.log(doc)
 }).catch(err => {

    console.log(err)
 })

 //update first instance age using save 
 P1.age=55;
P1.save()

// find instances on name skander
 Person.find({name:"Skander"}).then(doc =>{

    console.log(doc)
 })

// find one instance of name ranim
Person.findOne({name:"Ranim"}).then(doc =>{

    console.log(doc)
})

Person.findById({_id:"61859f988b13a25a4280296b"}).then(doc =>{

    console.log(doc)
})

// update one instance of name aziz
Person.updateOne({name:'Aziz'},{age: '44'})

// find one instance by id and delete it
Person.findByIdAndDelete({_id: "61859fe2e0aebf80a81c464c"}).then(
    console.log("deleted")
)

// remove and istance of name skander
Person.remove({name:'Skander'});

//helpers

Person.find({favoriteFoods:"lablebi"}).limit(2).select("-age").then( doc=>{console.log(doc)}).catch(err => console.log(err))

     



app.listen(3001, () => {

    console.log(" we are connected");
})