// import { useState } from 'react'

import { useQuery } from 'react-query'
import './App.css'
import { fetchAllTips } from './helpers/fetchAllTips'
import TipReview from './Components/TipReview';
import SearchBar from './Components/SearchBar';
import TipHeader from './Components/TipHeader';

function App() {
  const {data, status} = useQuery("tips", fetchAllTips);
  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
    {status === "loading" && <p>Fetching data...</p>}

    <div className="max-h-screen grid grid-flow-row-dense">
      <SearchBar/>
      <div className='bg-primary-800 p-4 w-3/4 mx-auto grid grid-flow-row gap-3 rounded-xl max-h-[35rem] overflow-scroll'>
      {status === "success" && (
        <>
        <TipHeader headers={['Location','Date','Total','Breakdown']}/>
        {data.map((d,idx)=><TipReview {...d} key={idx}/>)}
        </>
        )}
      </div>
      </div>
      </>
  )
}

export default App
