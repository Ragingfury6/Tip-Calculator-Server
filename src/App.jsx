// import { useState } from 'react'

import { useQuery } from "react-query";
import "./App.css";
import { fetchAllTips } from "./helpers/fetchAllTips";
import TipReview from "./Components/TipReview";
import SearchBar from "./Components/SearchBar";
import TipHeader from "./Components/TipHeader";
import { useReducer, useState } from "react";

function App() {
  let { data, status } = useQuery("tips", fetchAllTips);
  const [filteredData, setFilteredData] = useState(null);
  const filtrationReducer = (state, action) => {
    switch (action.type) {
      case "Location":
        return { ...state, location: action.payload };
      case "StartDate":
        return { ...state, startDate: action.payload };
      case "EndDate":
        return { ...state, endDate: action.payload };
      case "StartTime":
        return { ...state, startTime: action.payload };
      case "EndTime":
        return { ...state, endTime: action.payload };
      case "MinTotal":
        return { ...state, minTotal: action.payload };
      case "MaxTotal":
        return { ...state, maxTotal: action.payload };
      default:
        return { ...state };
    }
  };
  const [filtration, dispatch] = useReducer(filtrationReducer, {
    location: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    minTotal: "",
    maxTotal: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      new Date(filtration.endDate).getTime() <
        new Date(filtration.startDate).getTime() ||
      Number(filtration.minTotal) > Number(filtration.maxTotal) ||
      filtration.startTime > filtration.endTime
    ) return false;
    
    console.log(filtration);
    const UTCOffset = (new Date().getTimezoneOffset())/60;
    await fetch(
      "https://tip-calculator-server.onrender.com/tip/filter",
      {
        method: "POST",
        body:JSON.stringify({
          location: filtration.location,
          startDate:filtration.startDate,
          endDate:filtration.endDate,
          startTime:filtration.startTime,
          endTime:filtration.endTime,
          minTotal:filtration.minTotal,
          maxTotal:filtration.maxTotal,
          UTCOffset
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(res=>res.json()).then(data=>{
      if(data){
        console.log(data);
        setFilteredData(data);
        return true;
      }
    });
    // new request with use query
    // set filtered data
    // react loading skele
  };
  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}

      <div className="max-h-screen grid grid-flow-row-dense">
        <SearchBar filtration={filtration} dispatch={dispatch} handleSubmit={handleSubmit}/>
        <div className="bg-primary-800 p-4 w-3/4 mx-auto grid grid-flow-row gap-3 rounded-xl">
          {status === "success" && (
            <>
              <h2 className="text-center text-3xl font-semibold mb-2">
                {filteredData ? (filteredData.length === 0 ? 'No Results Found' : `Displaying All ${filteredData.length} Results`) : `Displaying All ${data.length} Results`}
              </h2>
              <TipHeader headers={["Location", "Date", "Total", "Breakdown"]} />
              <div className="max-h-[28rem] overflow-scroll grid grid-flow-row gap-3">
                {!filteredData ? data.map((d, idx) => (
                  <TipReview {...d} key={idx} />
                )) : filteredData.map((d, idx) => (
                  <TipReview {...d} key={idx} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
