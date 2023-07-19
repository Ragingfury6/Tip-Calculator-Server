export default function militaryToStandard(time){
let [hours, minutes] = time.split(':'); // convert to array
let timeValue;

if (hours > 0 && hours <= 12) {
  timeValue= "" + hours;
} else if (hours > 12) {
  timeValue= "" + (hours - 12);
} else if (hours == 0) {
  timeValue= "12";
}
timeValue += (minutes == 0) ? ":00" : (minutes < 10 ? ":"+minutes : ":"+minutes)
timeValue += (hours >= 12) ? " P.M." : " A.M.";
return timeValue;
}