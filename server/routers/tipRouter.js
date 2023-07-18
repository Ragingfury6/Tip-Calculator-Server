import express from "express";
import Tip from "../database/models/Tip.js";
const tipRouter = express.Router();

// Get all Tips
tipRouter.get("/", async (req, res) => {
  const allTips = await Tip.find();
  if (allTips) {
    return res.status(200).json(allTips);
  }
  return res.sendStatus(404);
});

// Get Specific Tip By Id
// tipRouter.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const tip = await Tip.findById(id);
//   return res.status(200).json(tip);
// });

tipRouter.put("/", async (req,res)=>{
    (await Tip.find()).forEach(async (tip)=>{
       let date = tip._id.getTimestamp().toISOString();
       console.log(date);
    //    date = new Date(date).toISOString();
    //    tip.date = date;
    //    await tip.save();
    });
    res.sendStatus(201);
});

// Add a tip
tipRouter.post("/", async (req, res) => {
  const { location, total, employees, tips, hours } = req.body;
  let date = new Date().toISOString();
  if (date && location && total && employees && tips && hours) {
    const newTip = new Tip({ date, location, total, employees, tips, hours });
    const insertedTip = await newTip.save();
    if (insertedTip) {
      return res.status(201).json(insertedTip);
    }
    return res.sendStatus(400);
  }
});

// Get tips based on filters
tipRouter.post("/filter", async (req, res) => {
  let {
    location,
    startDate,
    endDate,
    startTime,
    endTime,
    minTotal,
    maxTotal,
  } = req.body;
  console.log(location, startDate,endDate,startTime,endTime, minTotal, maxTotal);
  // Set Defaults for body
  if(minTotal == "") minTotal = 0;
  if(maxTotal == "") maxTotal = 50000;

  if(startDate == ""){
    let tempDay = new Date();
    startDate = `${tempDay.getFullYear()}-${tempDay.getMonth() + 1}-${tempDay.getDate()}`;
  }
  if(startTime == ""){
    let tempDay = new Date();
    startTime=`${tempDay.getHours()}:${tempDay.getMinutes()}`;
  }
  if(endDate == ""){
    let tempDay = new Date();
    endDate = `${tempDay.getFullYear()}-${tempDay.getMonth() + 1}-${tempDay.getDate()}`;
  }
  if(endTime == ""){
    let tempDay = new Date();
    endTime=`${tempDay.getHours()}:${tempDay.getMinutes()}`;
  }
  /*
  FIX MONTH MINUS OR PLUS ONE IN CASE JAN OR DEC

  */
  
  // Setup Date
  let [startYear, startMonth, startDay] =  startDate.split("-");
  let [startHours, startMinutes] = startTime.split(":");
  let startISO = new Date();
  startISO.setFullYear(startYear);
  startISO.setMonth(Number(startMonth)-1);
  startISO.setDate(startDay);
  startISO.setHours(startHours);
  startISO.setMinutes(startMinutes);
  let [endYear, endMonth, endDay] =  endDate.split("-");
  let [endHours, endMinutes] = endTime.split(":");
  let endISO = new Date();
  endISO.setFullYear(endYear);
  endISO.setMonth(Number(endMonth)-1);
  endISO.setDate(endDay);
  endISO.setHours(endHours);
  endISO.setMinutes(endMinutes);

  startISO = startISO.toISOString();
  endISO = endISO.toISOString();


  return res.status(200).json({startISO ,endISO})
//   const filteredTips = await Tip.find({}).where('total').gte(Number(minTotal)).lte(Number(maxTotal)).where('date').gte(startISO).lte(endISO).sort('-total').exec();
//   if(filteredTips){
//     return res.status(200).json(filteredTips);
//   }
//   return res.sendStatus(400);
});

export default tipRouter;
