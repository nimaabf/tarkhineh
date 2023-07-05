const express=require('express')
const foodRoutes=require('./routes/foodRoutes')
const foodModel=require('./models/tarkhinehModel')
const fs=require('fs')

const app=express()
app.use(express.json())

app.use('/api/v1/specialfoods',foodRoutes)
// const newFood=new foodModel({
//     name:'Pizza',
//     price:'123'
// })
// newFood.save().then(doc=>{
//     console.log(doc)
// })

const specialfoods=JSON.parse(fs.readFileSync('./specialFoodsByBranch.json'))

module.exports=app