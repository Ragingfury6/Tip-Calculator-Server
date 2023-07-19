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

// tipRouter.put("/", async (req,res)=>{
//     (await Tip.find()).forEach(async (tip)=>{
//        let date = tip._id.getTimestamp().toISOString();
//        console.log(date);
//     //    date = new Date(date).toISOString();
//     //    tip.date = date;
//     //    await tip.save();
//     });
//     res.sendStatus(201);
// });

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

  // Set Defaults for body
  if(minTotal == "") minTotal = 0;
  if(maxTotal == "") maxTotal = 50000;

  if(startDate == "") startDate = `2022-01-01`;
  if(startTime == "") startTime = "00:00"
  if(endDate == ""){
    let tempDay = new Date();
    endDate = `${tempDay.getFullYear()}-${tempDay.getMonth() + 1}-${tempDay.getDate()}`;
  }
  if(endTime == "") endTime = "23:59";
  /*
  FATAL MISTAKE - TIME QUERY OVER MULTIPLE DAYS IS SIMPLY A START AND END TIME, AND NOT A BETWEEN TIME


  FIX MONTH MINUS OR PLUS ONE IN CASE JAN OR DEC
  ---
  FIX IT - SHOULDN't HAVE TO HAVE BOTH START AND END DATE, JUST ONE OR OTHER

  FIX IT - IF DATES ARE VALID, TIMES MUST BE VALID NO MATTER WHAT
  */
  console.log(location, startDate,endDate,startTime,endTime, minTotal, maxTotal);
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

  // Handle Offset
  // const UTCOffset = (new Date().getTimezoneOffset())/60;
  // console.log(UTCOffset);
  console.log(startISO,endISO);
  // startISO.setHours(startISO.getHours() + UTCOffset);
  // endISO.setHours(endISO.getHours() + UTCOffset);
  
  startISO = startISO.toISOString();
  endISO = endISO.toISOString();
  
  console.log(startISO,endISO);

  // return res.status(200).json({startISO ,endISO})
  const filteredTips = await Tip.find({}).where('total').gte(Number(minTotal)).lte(Number(maxTotal)).where('date').gte(startISO).lte(endISO).sort('-total').exec();
  if(filteredTips){
    return res.status(200).json(filteredTips);
  }
  return res.sendStatus(400);
});

export default tipRouter;
