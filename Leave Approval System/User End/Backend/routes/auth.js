const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const USER = mongoose.model('USER')

const bcryptjs = require('bcryptjs')

const jsonWebToken = require('jsonwebtoken')

const {secret} = require('../keys')

// router.get("/hello", (req, res) => {
//     console.log("hello")
//     res.send("hello how are you")
// })


router.post("/signUp", (req, res) => {
    // console.log("chal raha hai bhai chill mar")
    const { name, email, phone, password, collegeId, image } = req.body
    if (!name || !email || !phone || !password || !collegeId || !image) {
        // return res.send("Please add all the fields")
        return res.status(422).json({ msg: "Please add all the fields" })
    }

    USER.findOne({ $or: [{ email: email }, { phone: phone }, { collegeId: collegeId }] })
        .then((alreadyUser) => {
            if (alreadyUser) {
                return res.status(422).json({ msg: "User already exist" })
            }
            bcryptjs.hash(password, 10)
                .then((encryptedPass) => {
                    const user = new USER({
                        name, email, password: encryptedPass, phone, collegeId, image
                    })

                    user.save()
                        .then(user => { res.json("Data saved") })
                        .catch((error) => {
                            console.log("Something occur")
                        })
                })
        })
})

router.post('/signin',(req,res) =>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({messege:"Please enter all the details"})
    }

    USER.findOne({email:email})
    .then((alreadyExist)=>{
        if(!alreadyExist){
            return res.status(422).json({messege:"Invalid Email"})
        }


        bcryptjs.compare(password,alreadyExist.password)
        .then((match)=>{
            if(match){
                const token = jsonWebToken.sign({_id:alreadyExist.id} , secret)
                const {_id,name,email,collegeId,image,phone,} = alreadyExist
                console.log({token,user:{_id,name,email,collegeId,image,phone}})

                res.json({token,user:{_id,name,email,collegeId,image,phone}})
            } else {
                return res.status(422).json({messege:"Incorrect password"})
            }
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})














module.exports = router
