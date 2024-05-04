// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
// import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'




// eslint-disable-next-line no-unused-vars
const TitleCard = ({ title, category }) => {

    const [apiMovie, setApiMovie] = useState([])
    const cardsRef = useRef()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODNiYzdjNzAxMWY2OTMxMzUxNDFmZWU0YTRlNjczOSIsInN1YiI6IjY2MzY0MTJkNjYxMWI0MDEyYTY3ZGU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2yINewVEMZnTHx2VsvVv6SmnZh4x9h3KrxKByn-zLQA'
        }
    };



    const handleWheel = (event) => {
        event.preventDefault()
        cardsRef.current.scrollLeft += event.deltaY
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setApiMovie(response.results))
            .catch(err => console.error(err));
        cardsRef.current.addEventListener('wheel', handleWheel)
    }, [])

    return (
        <div className='title-cards'>
            <h2>{title ? title : 'Popular on Netflix'}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiMovie.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default TitleCard