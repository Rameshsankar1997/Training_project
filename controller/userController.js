var express = require('express');
var mysql = require('mysql2');
var cors = require('cors');
const nodemailer = require("../sendmailer");
var bodyparser = require('body-parser');
const UserModal = require("../model/userModel")
const emailValidator = require('email-validator');


// async function isEmailValid(email) {
//   return emailValidator.validate(email)
// }

const userController={

async createUser(req,res){

  let userData = req.body;

  let email = userData.email;

  console.log(email);

  if(emailValidator.validate(email))
  {
    console.log("Email is valid");

    let password = userData.password; 

    let confirm_password = userData.confirm_password; 
   
    if(password === confirm_password)
    {
   
      let[User]=await UserModal.CreateUser(userData)
    
      if(User.affectedRows>0){
        // console.log(User);
        res.send({
          message: "Register is created successfully."
        });
        res.send({
          message: "Register is created successfully."
        });
        // console.log(userData);
        nodemailer.sendConfirmationEmail(
          userData.username,
          userData.email
        );
     }
     else
     {
       console.log("Error");
     }
    }
    else{
     res.send({
       message: "Password is missmatched."
     });
   
    }
  }
  else
  {
    res.send({
      message: "Please provide a valid email address."
    });
  }
  
  // const {valid, reason, validators} = await isEmailValid(email);

  // if (valid) return res.send({message: "OK"});

  // return res.status(400).send({
  //   message: "Please provide a valid email address.",
  //   reason: validators[reason].reason
  // })

  },

//loginuser
    async loginUser(req,res){

      let userData = req.body;
    
      // console.log(req.body);
    
      let[User]=await
    
    
       UserModal.loginUser(userData)
    
        if(User.affectedRows>0){
          console.log(User);
          res.send({
            message: "log in  successfully."
          });
          console.log(userData);
          nodemailer.sendConfirmationEmail(
            userData.username,
            userData.email
     );
        }
        else{
          console.log("Error");
        }
      },
      async getAllUser(req,res){

  console.log("Hello");

  let getAllUser = await UserModal.GetAllUser();
  if(getAllUser[0].length){
    console.log("Done");
    res.send(getAllUser[0]);
  }
  else{
    console.log("Error");
  }
},
async getUser(req,res){

  let data ={"user":req.params.id};
  let getinUser = await UserModal.getUser(data);

  if(getinUser){
    res.send(getinUser[0]);
  }

},
async updateUser(req,res){

  

  let data ={"user_id":req.params.id,"user_name":req.body.user_name};

  console.log(data);
  let getinUser = await UserModal.updateUser(data);

  if(getinUser){
    res.send(getinUser[0]);
  }

},

 
}


module.exports=userController;

