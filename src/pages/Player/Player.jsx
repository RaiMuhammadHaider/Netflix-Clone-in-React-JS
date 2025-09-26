import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Link, useParams } from 'react-router-dom'
const Player = () => {
  const { id }  = useParams()
  const [apiData , setApiData] = useState({
    type: '',
    name: '',
    published_at: '',
    key: '',
  })
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2E0NjI4NTliZjgzZDE2YzA3MjhkOTBiN2I5ZGQ2ZiIsIm5iZiI6MTc1ODgzNDE2My40MTY5OTk4LCJzdWIiOiI2OGQ1YWRmMzBhMGM0ZDA1M2Y2MTBmNWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.06G3vw8XQb-twFeB0MS3IhTuXdOg7icX9aAuCPvea1k'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])
  return (

    <div className='player'>
     <Link to = '/' >
      <img src={back_arrow_icon} className='back-arrow-icon' alt="" />
      </Link>
      <iframe src={`https://www.youtube.com/embed/${apiData.key} `}  frameborder="0"
      allowFullScreen height= '90%' width='90%' > </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

    </div>
  )
}

export default Player