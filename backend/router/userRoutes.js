const express=require("express");
const router=express.Router();
const userController=require("../controllers/userController");
router.get("/users",userController.getUsers);
router.post("/user",userController.createUsers);
router.get("/users/:Id",userController.getUserById);
router.post("/users/:Id",userController.updateById);
router.delete("/users/:Id",userController.deleteById);
module.exports=router;