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
    UTCOffset
  } = req.body;
  
  // Vars to stop utc offset if undefined originally
  // const startTimeWasOriginallyEmpty = startTime == "";
  // const endTimeWasOriginallyEmpty = endTime == "";

  // Set Defaults for body
  if(minTotal == "") minTotal = 0;
  if(maxTotal == "") maxTotal = 50000;

  // start date will have to be limited at some point
  if(startDate == "") startDate = `2023-07-12`;
  if(startTime == "") startTime = "00:00";
  if(endDate == ""){
    let tempDay = new Date();
    endDate = `${tempDay.getFullYear()}-${tempDay.getMonth() + 1}-${tempDay.getDate()}`;
  }
  if(endTime == "") endTime = "23:59";
  /*
  FIX MONTH MINUS OR PLUS ONE IN CASE JAN OR DEC
  ---
  FIX SHOULDN't HAVE TO HAVE BOTH START AND END DATE, JUST ONE OR OTHER
  SAME WITH TIME AND TOTAL
  */
 // NO TIME BUT SPECIFIED DATE NEEDS TO BE FIXED, YES UTC OFFSET NEEDS TO BE ACCOUNTED
  console.log(location, startDate,endDate,startTime,endTime, minTotal, maxTotal);

  // ISO Arrays
  const startISOs = [];
  const endISOs = [];

  // Setup Date
  
  // Declare Vars
  let [startYear, startMonth, startDay] =  startDate.split("-");
  let [startHours, startMinutes] = startTime.split(":");
  let [endYear, endMonth, endDay] =  endDate.split("-");
  let [endHours, endMinutes] = endTime.split(":");

  // Set Dates
  let startISO = new Date();
  startISO.setFullYear(startYear);
  startISO.setMonth(Number(startMonth)-1);
  startISO.setDate(startDay);
  startISO.setHours(startHours);
  startISO.setMinutes(startMinutes);

  let endISO = new Date();
  endISO.setFullYear(endYear);
  endISO.setMonth(Number(endMonth)-1);
  endISO.setDate(endDay);
  endISO.setHours(endHours);
  endISO.setMinutes(endMinutes);

  // Handle Offset
  // change if using local

  // *** 
  // FIND HOW MANY DAYS, BEFORE THE UTC OFFSET IS CALCULATED FOR 
  // reset button for filter (for mobile mostly)
  //***

  // find how many days
  const msInDay = 1000 * 60 * 60 * 24;
  const tempStartDate = new Date(startISO);
  tempStartDate.setHours(1);
  tempStartDate.setMinutes(0);
  const tempEndDate = new Date(endISO);
  tempEndDate.setHours(1);
  tempEndDate.setMinutes(0);
  const totalDays  = Math.round((tempEndDate.getTime() - tempStartDate.getTime())/msInDay) + 1;
  console.log(totalDays);

  //CHANGE
  startISO.setHours(startISO.getHours() + UTCOffset);
  endISO.setHours(endISO.getHours() + UTCOffset);

  console.log(startISO, endISO)



  for(let i = 0; i < totalDays; i++){
    const currentDayStartISO = new Date(startISO);
    currentDayStartISO.setDate(startISO.getDate() + i);
    
    let currentDayEndISO = new Date(startISO);
    currentDayEndISO.setDate(startISO.getDate() + i);
    currentDayEndISO.setHours(endISO.getHours());
    currentDayEndISO.setMinutes(endISO.getMinutes());

    if(totalDays === 1) currentDayEndISO = new Date(endISO);

    startISOs.push(new Date(currentDayStartISO).toISOString());
    endISOs.push(new Date(currentDayEndISO).toISOString());
  }

  console.log(startISOs, endISOs);
  
  // Build $or array
  let dateQueryArray = startISOs.map((iso,idx)=>{
    return {date:{$gte:iso, $lte:endISOs[idx]}};
  });

  // .where('date').or([]) 
  const filteredTips = await Tip.find({
    total:{$gte:Number(minTotal), $lte:Number(maxTotal)},
    // date:{$gte:startISO,$lte:endISO}
    $or:dateQueryArray
  }).sort('-total').exec();
  if(filteredTips){
    return res.status(200).json(filteredTips);
  }
  return res.sendStatus(400);
});

export default tipRouter;

