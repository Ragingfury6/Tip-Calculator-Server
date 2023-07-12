// import { useState } from 'react'

import { useQuery } from 'react-query'
import './App.css'
import { fetchAllTips } from './helpers/fetchAllTips'
import TipReview from './Components/TipReview';

function App() {
  const {data, status} = useQuery("tips", fetchAllTips);
  return (
      <div>
        {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (data.map((d,idx)=><TipReview {...d} key={idx}/>))}
      </div>
  )
}

export default App
