import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import Cards_data from '../../assets/cards/Cards_data'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'
const TitleCards = ({title , category}) => {
  const [ apiData, setApiData ] = useState([])
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2E0NjI4NTliZjgzZDE2YzA3MjhkOTBiN2I5ZGQ2ZiIsIm5iZiI6MTc1ODgzNDE2My40MTY5OTk4LCJzdWIiOiI2OGQ1YWRmMzBhMGM0ZDA1M2Y2MTBmNWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.06G3vw8XQb-twFeB0MS3IhTuXdOg7icX9aAuCPvea1k'
  }
};
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category? category : 'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
}, [])

  
  return (
    // <div className='titlecards'>
    //   <h2> {title? title : 'Popular on Netflix'}</h2>
    //   <div className="card-list">
    //     {
    //       apiData.map((card , index)=>(
    //         <div className="card" key={index}>
    //           <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt={card.title} className='movie-img' />
    //           <p className='move-name'>{card.original_title}</p>
    //         </div>
    //       ))
    //     }
    //   </div>
    // </div>
    <div className='titlecards'>
  <h2>{title ? title : 'Popular on Netflix'}</h2>
  <div className="card-list">
    {apiData.map((card, index) => {
      return  <div className="card" key={index}>
     
        <img 
          src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} 
          alt={card.original_title} 
          className="movie-img" 
        />
        <div className="card-details">
          <h3 className="movie-name">{card.original_title || card.name}</h3>
          <p className="movie-desc">
            {card.overview.length > 100 
              ? card.overview.slice(0, 100) + "..." 
              : card.overview}
          </p>
          <div className="movie-meta">
            <span>⭐ {card.vote_average.toFixed(1)}</span>
            <span>📅 {card.release_date || card.first_air_date}</span>
          </div>
        <Link key={index} to={`/player/${card.id}`}><button className="watch-btn">▶ Watch Now</button></Link>
        </div>
      </div>
        
  
    })} 
  </div>
</div>
  );
}


export default TitleCards