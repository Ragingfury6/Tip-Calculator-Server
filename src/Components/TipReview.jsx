import PropTypes from 'prop-types';
import dateConverter from '../helpers/dateConverter';
import Swal from 'sweetalert2';
// import TipHeader from './TipHeader';
export default function TipReview({date, location, total, employees, tips, hours}){
    const employeeArr = employees.split(",");
    const tipsArr = tips.split(",");
    const hoursArr = hours.split(",");
    const totalHours = hoursArr.reduce((a,e)=>a+Number(e),0);
    const {month,day,time} = dateConverter(new Date(date).toLocaleString('en-GB', { timeZone: 'MST' }));
    const detailedViewHTML = employeeArr.reduce((a,e,i)=>{
        return (a+
        `<div class="grid grid-cols-3 gap-4 justify-items-center text-[#fff] bg-primary-600 rounded-md p-3" key={idx}>
            <p>${e.substr(0,1).toUpperCase() + e.substr(1)}</p>
            <p>${hoursArr[i]}</p>
            <p>${tipsArr[i]}</p>
            </div>`
        );
    },'');
    const handleClick = () => {
        Swal.fire({
            title: 'Detailed View',
            html:`<div class="">
            <div class="grid grid-cols-3 gap-4 justify-items-center font-bold text-2xl">
                <p>Employees</p>
                <p>Hours</p>
                <p>Tips</p>
            </div>
            <div class="h-px bg-accent-dark-blue px-4 my-2 rounded-full"></div>
            <div class="bg-primary-800 p-2 grid grid-flow-row gap-3 rounded-xl max-h-[35rem] overflow-scroll">
            ${detailedViewHTML}
            </div>
            </div>`,
            background:"#191C24",
            color:"#fff",
            confirmButtonColor:"#0D6EFD",
            confirmButtonText: 'Okay!'
          })
    }
    return (
        <div className="grid grid-cols-4 gap-4 justify-items-center bg-primary-600 rounded-md p-3 cursor-pointer hover:bg-accent-dark-blue transition" onClick={()=>handleClick()}>
                <p>{location}</p>
                <p>{`${month} ${day}, ${time}`}</p>
                <p>{total}</p>
                {/* {employeeArr.map((e,idx)=>{
                    return (
                    <div className="emp" key={idx}>
                        <p>{e}</p>
                        <p>{hoursArr[idx]} Hours</p>
                        <p>${tipsArr[idx]}</p>
                        </div>
                    );
                })} */}
                <div className="emp">
                    <p>{employeeArr.length} Employees · {totalHours} Hours</p> 
                </div>
        </div>
    )
}

TipReview.propTypes = {
    date: PropTypes.string,
    location:PropTypes.string,
    total:PropTypes.number,
    employees:PropTypes.string,
    tips:PropTypes.string,
    hours:PropTypes.string,
}