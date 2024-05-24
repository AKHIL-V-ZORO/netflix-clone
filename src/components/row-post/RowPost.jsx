
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { imageUrl, imageUrl_Row } from '../../constants/url'
import axios from '../../helper/axios'
import MovieCard from '../movie-card/MovieCard'
import './RowPost.css'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function RowPost({ title, fetchUrl, isLarge = false, rowId }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {

    async function fetchMovies() {
      try {
        axios.get(`${fetchUrl}`).then((response) => {
          setMovies(response.data.results)
        })
      } catch (error) {
        console.log("error=>", error)
      }
    }
    fetchMovies()

  }, [fetchUrl])

  function caseSelect(string) {
    return (string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
  }

  function scrollRight() {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft -= 600
  }
  function scrollLeft() {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft += 600
  }

  return (
    <>
      <h4 className='row--title'>{caseSelect(title)}</h4>
      <div className="row">
      <MdChevronLeft onClick={scrollRight} className='row--post--slideRight group-hover:block' size={30} />
        <div id={'slider' + rowId} className='row--post' >
          {
            movies?.map((movie, id) => (
              (isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path) ?
                <MovieCard key={id} movie={movie} isLarge={isLarge} /> : null
            ))
          }
        </div> 
        <MdChevronRight onClick={scrollLeft} className='row--post--slideLeft ' size={30} />
      </div>
    </>
  )
}

export default RowPost
