const express=require('express');

const {handleGetAllUsers,handleGetUserById, updateUserById, deleteUserById, handleCreateNewUser}=require('../controllers/user');


const router=express.Router();

//REST API
router.get('/',handleGetAllUsers);

router
.route("/:id")
.get(handleGetUserById)
.patch(updateUserById)
.delete(deleteUserById);

router.post("/",handleCreateNewUser);
module.exports=router;