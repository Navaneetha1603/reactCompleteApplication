const User=require("../model/user");
const getUsers=async (req,res)=>{
    try{
        const users=await User.find();
        return res.json(users)
    }
    catch(err){
        return res.status(400).json(err)
    }
}

const createUsers=async (req,res)=>{
    try{
        const user = new User(req.body);
        // user.username=req.body.username;
        // user.description=req.body.description;
        // user.duration=req.body.duration;
        // user.date=req.body.date;
        await user.save();
        return res.json(user)
    }
    catch(err){
        return res.status(400).json(err);
    }
}

const getUserById=async (req,res)=>{
    let userid=req.params.Id;
    console.log(userid)
    try{
       const user= await User.findById(userid);
       return res.json(user);
    }
    catch(err){
        return res.status(400).json(err);
    }
}

const deleteById=async (req,res)=>{
    let userid=req.params.Id;
    console.log(userid);
    try{
        await User.findByIdAndDelete(userid);
        return res.json("deleted");
    }
    catch(err){
        return res.status(400).json(err);
    }
}
const updateById=async (req,res)=>{
    let userid=req.params.Id;
    console.log(userid);
    try{
        await User.findByIdAndUpdate(userid,req.body);
        return res.json("updated");
    }
    catch(err){
        return res.status(400).json(err);
    }
}
module.exports={
    getUsers,
    createUsers,
    getUserById,
    updateById,
    deleteById
}