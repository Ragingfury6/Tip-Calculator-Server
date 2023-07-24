import PropTypes from "prop-types";
import { useState, useRef } from "react";
export default function TipHeader({ sortInfo, setSortInfo }) {
  const [sortDirs, setSortDirs] = useState([true, true, true]);
  const totalRef = useRef(null);
  const dateRef = useRef(null);
  return (
    <div className="">
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center font-bold text-2xl">
        <div className="flex items-center gap-4">
          <div
            className="hover:text-accent-dark-blue transition cursor-pointer flex items-center gap-4"
            onClick={() => {
              const dirs = [...sortDirs];
              dirs[0] = !dirs[0];
              setSortDirs(dirs);
              setSortInfo(["location", sortDirs[0]]);
            }}
          >
            <p>Location</p>
          </div>
          {/* <img src="/chevron-down.svg" className='w-8 h-8' alt="" /> */}
        </div>
        <div className="flex items-center gap-4">
          <div
            className="hover:text-accent-dark-blue transition cursor-pointer flex items-center gap-4"
            onClick={() => {
              const dirs = [...sortDirs];
              dirs[1] = !dirs[1];
              setSortDirs(dirs);
              setSortInfo(["date", sortDirs[1]]);
              dateRef.current.classList.toggle("rotate-180");
            }}
          >
            <p>Date</p>
            <img
              src="/chevron-down.svg"
              alt=""
              className="w-8 h-8 transition-all duration-300"
              ref={dateRef}
            />
          </div>
          {/* <img src="/chevron-down.svg" className='w-8 h-8' alt="" /> */}
        </div>
        <div className="flex items-center gap-4">
          <div
            className="hover:text-accent-dark-blue transition cursor-pointer flex items-center gap-4"
            onClick={() => {
              const dirs = [...sortDirs];
              dirs[2] = !dirs[2];
              setSortDirs(dirs);
              setSortInfo(["total", sortDirs[2]]);
              totalRef.current.classList.toggle("rotate-180")
            }}
          >
            <p>Total</p>
            <img
              src="/chevron-down.svg"
              alt=""
              className="w-8 h-8 transition-all duration-300"
              ref={totalRef}
            />
          </div>
          {/* <img src="/chevron-down.svg" className='w-8 h-8' alt="" /> */}
        </div>
        <p className="hidden xl:block">Breakdown</p>
      </div>
      <div className="h-px bg-accent-dark-blue px-4 my-2 rounded-full"></div>
    </div>
  );
}
TipHeader.propTypes = {
  sortInfo: PropTypes.array,
  setSortInfo: PropTypes.func,
};
