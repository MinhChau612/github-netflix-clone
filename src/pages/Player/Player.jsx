// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../..//assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'





const Player = () => {

  const {id} =useParams()

  const [apiMovie, setApiMovie] = useState({
    name: '',
    key: '',
    punlished_at: '',
    typeof: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODNiYzdjNzAxMWY2OTMxMzUxNDFmZWU0YTRlNjczOSIsInN1YiI6IjY2MzY0MTJkNjYxMWI0MDEyYTY3ZGU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2yINewVEMZnTHx2VsvVv6SmnZh4x9h3KrxKByn-zLQA'
    }
  };


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiMovie(response.results))
      .catch(err => console.error(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt='' />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/${apiMovie.key}`} title='trailer' allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiMovie.punlished_at}</p>
        <p>{apiMovie.name}</p>
        <p>{apiMovie.typeof}</p>
      </div>
    </div>
  )
}

export default Player