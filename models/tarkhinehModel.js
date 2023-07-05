const mongoose=require('mongoose')


const tarkhinehSchema=new mongoose.Schema({
    image:String,
    name: {
        type:String,
        required:[true,'A Food Must Have a Name']
    },
    price: {
        type:Number,
        required:[true,'A Food Must Have a Price']
    },
    discount_percent: Number,
    score: Number,
    all_scores:Number
})

const Foods=mongoose.model("Foods",tarkhinehSchema)


// const newFood=new Foods({
//     name:'Pizza',
//     price:'123'
// })
// newFood.save().then(doc=>{
//     console.log(doc)
// })
// module.exports=Foods