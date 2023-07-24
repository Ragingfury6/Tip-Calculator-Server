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
  let [filteredData, setFilteredData] = useState(null);
  let [sortInfo, setSortInfo] = useState(['',false]);
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
      case "RESET":
        return {
        location: "",
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        minTotal: "",
        maxTotal: "",
      }
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
  const handleSubmit = async (e, reset=false) => {
    e.preventDefault();
    // if (
    //   new Date(filtration.endDate).getTime() <
    //     new Date(filtration.startDate).getTime() ||
    //   Number(filtration.minTotal) > Number(filtration.maxTotal) ||
    //   filtration.startTime > filtration.endTime
    // ) return false;
    
    console.log(filtration);
  
    const UTCOffset = (new Date().getTimezoneOffset())/60;
    await fetch(
      "https://tip-calculator-server.onrender.com/tip/filter",
      {
        method: "POST",
        body: reset ? JSON.stringify({
          location: "",
          startDate:"",
          endDate:"",
          startTime:"",
          endTime:"",
          minTotal:"",
          maxTotal:"",
          UTCOffset
        }) : JSON.stringify({
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
  };
  const sortData = (a,b) => {
        if(a[sortInfo[0]] < b[sortInfo[0]]) return (sortInfo[1] ? 1 : -1);
        if(a[sortInfo[0]] > b[sortInfo[0]]) return (sortInfo[1] ? -1 : 1);
        return 0;
  }
  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}

      <div className="h-screen grid grid-cols-12 p-2 sm:p-8 auto-rows-[min-content]">
        <SearchBar filtration={filtration} dispatch={dispatch} handleSubmit={handleSubmit}/>
        <div className="bg-primary-800 mt-8 xl:mt-0 p-4 mx-auto flex flex-col max-h-[calc(100vh_-_13rem)] xl:max-h-[calc(100vh_-_4rem)] gap-3 rounded-xl w-full col-span-full xl:col-start-5 xl:col-end-[-1]">
          {status === "success" && (
            <>
              <h2 className="text-center text-3xl font-semibold mb-2">
                {filteredData ? (filteredData.length === 0 ? 'No Results Found' : `Displaying All ${filteredData.length} Results`) : `Displaying All ${data.length} Results`}
              </h2>
              <TipHeader sortInfo={sortInfo} setSortInfo={setSortInfo}/>
              <div className="overflow-scroll grid grid-flow-row gap-3">
                {!filteredData ? data.sort((a,b)=>sortData(a,b)).map((d, idx) => (
                  <TipReview {...d} key={idx} />
                )) : filteredData.sort((a,b)=>sortData(a,b)).map((d, idx) => (
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
