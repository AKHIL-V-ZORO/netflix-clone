import React from 'react'
import { imageUrl_Row } from '../../constants/url'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import './MovieCard.css'
import { useState } from 'react'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { UserAuth } from '../../auth/AuthProvider'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slice/userSlice'
import { db } from '../../firebase/firebase'


const MovieCard = ({ movie, isLarge }) => {
  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState(false)
  const user = useSelector(selectUser)

  const movieId = doc(db, 'users', `${user?.email}`)

  const saveShow = () => {
    if (user?.email) {
      setLike(!like)
      setSaved(true)
      updateDoc(
        movieId, {
        savedShows:arrayUnion
          (
            {
              id: movie.id,
              title: movie.title,
              img: movie.backdrop_path
            }
          )
      }
      )
    }else{
      alert('please log in to save movies')
    }
  }
console.log("movies",movie)
  return (
    <>
      <div className='movie--card w-[160px] sm:w-[200px] lg:w-[220px]'>
        <img
          className={`movie--card--img ${isLarge ? 'movie--card--poster' : null}`}
          src={`${imageUrl_Row}${isLarge ? movie.poster_path : movie.backdrop_path}`}
        />
        <div className='movie--card--fade'>
          <p className='movie--card--name text-xs md:text-sm'>{movie?.title}</p>
          <p onClick={saveShow} className='absolute top-4 left-4'>
            {
              !like ? <FaRegHeart /> :
                <FaHeart />
            }
          </p>
        </div>
      </div>
    </>
  )
}

export default MovieCard
