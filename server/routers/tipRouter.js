import express from 'express';
import Tip from '../database/models/Tip.js';
const tipRouter = express.Router();

tipRouter.get("/", async (req,res)=>{
    const allTips = await Tip.find();
    if(allTips){
        return res.status(200).json(allTips);
    }
    return res.sendStatus(404);
});

tipRouter.get("/:id", async (req, res) => {
    const {id} = req.params;
    const tip = await Tip.findById(id);
    return res.status(200).json(tip);
});

tipRouter.post("/", async (req,res) => {
    const {location, total, employees, tips, hours} = req.body;
    const date = new Date();
    if(date && location && total && employees && tips && hours){
        const newTip = new Tip({date, location, total, employees, tips, hours});
        const insertedTip = await newTip.save();
        if(insertedTip){
            return res.status(201).json(insertedTip);
        }
        return res.sendStatus(400);
    }
})

export default tipRouter;