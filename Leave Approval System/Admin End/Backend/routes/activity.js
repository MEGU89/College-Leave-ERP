const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()



const LEAVEINFO = mongoose.model('LEAVEINFO')


router.post('/leavedata',(req,res)=>{
    const {name,collegeId,department,typeOfLeave,startDate,endDate,totalDays,reason} = req.body
    if(!name || !collegeId || !department || !typeOfLeave || !startDate || !endDate || !totalDays || !reason){
        return res.status(422).json({messege:"Please add all the fields"})
    } 


    const data = new LEAVEINFO({
        name:name,
        collegeId:collegeId,
        department:department,
        typeOfLeave:typeOfLeave,
        startDate:startDate,
        endDate:endDate,
        totalDays:totalDays,
        reason:reason
    })



    data.save()
    .then(data => res.json("Data Saved"))
    .catch((error) => {console.log(error)})
})


router.get('/getleavedata',(req,res) =>{
    LEAVEINFO.find()
    .then((e) =>{
        res.json(e)
    })
})




router.get("/getstudentleaveinfo/:stuid" , (req,res) => {
    LEAVEINFO.findOne({_id : req.params.stuid})
    .then(student => {
        // console.log(product)
        return res.json(student)
    })
})



router.put('/updatestatus/:stutid', async (req, res) => {
    const itemId = req.params.stutid;
    const updatedData = req.body;

    try {
        // Find the item by ID and update it in the database
        const updatedItem = await LEAVEINFO.findByIdAndUpdate(itemId, updatedData, { new: true });

        res.json(updatedItem);
        // return res.json({message : "Product updated"}) 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});













module.exports = router
