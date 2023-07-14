import PropTypes from 'prop-types';
export default function TipHeader({headers}){
    return (
        <div className="">
        <div className="grid grid-cols-4 gap-4 justify-items-center font-bold text-2xl">
            {headers.map((h,idx)=><p key={idx}>{h}</p>)}
            {/* <p>Location</p>
            <p>Date</p>
            <p>Total</p>
            <p>Breakdown</p> */}
        </div>
        <div className="h-px bg-accent-dark-blue px-4 my-2 rounded-full"></div>
        </div>
    )
}
TipHeader.propTypes = {
    headers:PropTypes.array
}