// import converter from 'number-to-words';
import convertTime from 'convert-time';
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export default function dateConverter(str){
    const [date, time] = str.split(",");
    const month = MONTHS[Number(date.substr(3,2))-1];
    // const day = converter.toOrdinal(Number(date.substr(0,2)));
    const day = Number(date.substr(0,2));
    return {month, day, time: convertTime(time, 'hh:MM A')}
}