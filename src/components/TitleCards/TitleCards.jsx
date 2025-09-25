import React from 'react'
import './TitleCards.css'
import Cards_data from '../../assets/cards/Cards_data'
import cards_data from '../../assets/cards/Cards_data'
const TitleCards = ({title , category}) => {
  return (
    <div className='titlecards'>
      <h2> {title? title : 'Popular on Netflix'}</h2>
      <div className="card-list">
        {
          cards_data.map((card , index)=>(
            <div className="card" key={index}>
              <img src={card.image} alt={card.name} className='movie-img' />
              <p className='move-name'>{card.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TitleCards