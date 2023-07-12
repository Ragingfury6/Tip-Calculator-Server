import PropTypes from 'prop-types';
export default function TipReview({date, location, total, employees, tips, hours}){
    const employeeArr = employees.split(",");
    const tipsArr = tips.split(",");
    const hoursArr = hours.split(",");
    return (
        <div className="tip-review">
            <div>
                <p>Location</p>
                <p>{location}</p>
            </div>
            <div>
                <p>Date</p>
                <p>{date}</p>
            </div>
            <div>
                <p>Total</p>
                <p>{total}</p>
            </div>
                {employeeArr.map((e,idx)=>{
                    return (
                    <div className="emp" key={idx}>
                        <p>{e}</p>
                        <p>{hoursArr[idx]} Hours</p>
                        <p>${tipsArr[idx]}</p>
                        </div>
                    );
                })}
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