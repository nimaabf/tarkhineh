const express=require('express')
const foodController=require('../controllers/foodControllers')
const router=express.Router();

router.route('/').get(foodController.getAllFoods).post(foodController.addSpecialFood)


module.exports=router