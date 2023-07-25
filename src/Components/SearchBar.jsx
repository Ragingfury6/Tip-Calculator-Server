import { useRef, useState } from "react";
import Divider from "./Divider";
import PropTypes from "prop-types";
export default function SearchBar({ filtration, dispatch, handleSubmit }) {
  const [expanded, setExpanded] = useState(false);
  const searchRef = useRef(null);
  const chevronRef = useRef(null);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      id="search-form"
      className={`bg-primary-800 text-center mx-auto rounded-xl p-4 flex flex-col gap-4 items-center content-start w-full max-h-[calc(100vh_-_4rem)] overflow-scroll col-span-full xl:col-span-3 2xl:h-[inherit]`}
    >
      <div className="flex items-center mb-8 gap-4">
      <h2 className="text-4xl font-bold">Search By...</h2>
      <img src="/chevron-down.svg" className="w-8 h-8 xl:hidden transition duration-500" alt="" ref={chevronRef} onClick={()=>{
        setExpanded(!expanded);
        chevronRef.current.classList.toggle('rotate-180');
        if(expanded){
          searchRef.current.style.gridTemplateRows = '0fr';
        }else{
          searchRef.current.style.gridTemplateRows = '1fr';
        }
      }} />
      </div>
      <div className="grid grid-rows-[0fr] xl:!grid-rows-[1fr] 2xl:h-full transition-all duration-500" ref={searchRef}>
        <div className="overflow-hidden flex flex-col items-center justify-center">
      <div className="flex xl:flex-col justify-center items-start gap-6 flex-col md:flex-row">
        <div className="w-full">
          <h3 className="text-xl font-bold mb-2">Location</h3>
          <input
            type="text"
            value={filtration.location}
            onChange={(e) =>
              dispatch({ type: "Location", payload: e.target.value })
            }
            placeholder="e.g. Happy Valley"
            className="search-input search-input-lg"
          />
        </div>
        <div className="w-full">
          <h3 className="text-xl font-bold mb-2">Date</h3>
          <div className="search-input-container flex flex-col gap-4 justify-center items-center">
            <input
              type="date"
              value={filtration.startDate}
              onChange={(e) =>
                dispatch({ type: "StartDate", payload: e.target.value })
              }
              className="search-input"
            />
            <Divider />
            <input
              type="date"
              value={filtration.endDate}
              onChange={(e) =>
                dispatch({ type: "EndDate", payload: e.target.value })
              }
              className="search-input"
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-xl font-bold mb-2">Time</h3>
          <div className="search-input-container flex flex-col gap-4 justify-center items-center">
            <input
              type="time"
              value={filtration.startTime}
              onChange={(e) =>
                dispatch({ type: "StartTime", payload: e.target.value })
              }
              className="search-input"
            />
            <Divider />
            <input
              type="time"
              value={filtration.endTime}
              onChange={(e) =>
                dispatch({ type: "EndTime", payload: e.target.value })
              }
              className="search-input"
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-xl font-bold mb-2">Total</h3>
          <div className="search-input-container flex flex-col gap-4 justify-center items-center">
            <input
              type="text"
              value={filtration.minTotal}
              onChange={(e) =>
                dispatch({ type: "MinTotal", payload: e.target.value })
              }
              placeholder="e.g. 5.50"
              pattern="^[+-]?(\d*\.)?\d+$"
              className="search-input"
            />
            <Divider />
            <input
              type="text"
              value={filtration.maxTotal}
              onChange={(e) =>
                dispatch({ type: "MaxTotal", payload: e.target.value })
              }
              pattern="^[+-]?(\d*\.)?\d+$"
              className="search-input"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 2xl:my-auto py-4 px-12 rounded-xl bg-accent-dark-blue text-2xl font-bold tracking-wide w-min hover:bg-[#0252ca] transition"
        onClick={()=>{
          searchRef.current.style.gridTemplateRows = '0fr';
          setExpanded(!expanded);
          chevronRef.current.classList.toggle('rotate-180');
        }}
      >
        Search
      </button>
      <button
        type="button"
        className="mt-4 2xl:my-auto py-4 px-12 rounded-xl bg-accent-red text-2xl font-bold tracking-wide w-min hover:bg-[#8d2532] transition"
        onClick={(e)=>{
          searchRef.current.style.gridTemplateRows = '0fr';
          setExpanded(!expanded);
          chevronRef.current.classList.toggle('rotate-180');
          handleSubmit(e, true)
        }}
      >
        Reset
      </button>
      </div>
      </div>
    </form>
  );
}
SearchBar.propTypes = {
  filtration: PropTypes.object,
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func,
  searchRef: PropTypes.any
};
