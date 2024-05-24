import axios from '../../helper/axios'
import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../../constants/requests'
import { imageUrl } from '../../constants/url'
import { Link, Navigate } from 'react-router-dom'

const Banner = () => {
    const [moviesData, setMoviesData] = useState([])

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n) + "...." : string;
    }


    async function fetchData() {
        try {
            const response = await axios.get(`${requests.fetchTrending}`)
            const selectRandomMovie = Math.floor(Math.random() * response.data.results.length)
            setMoviesData(response.data.results[selectRandomMovie])
        }
        catch (e) {
            console.log(e)
        }
    }

    console.log(moviesData)

    useEffect(() => {

        fetchData()

    }, [])

    return (
        <section className='banner '>
            <div className='banner--poster'>
                <div className="banner--overlay--bottom"></div>
                <div className="banner--overlay--left"></div>
                <img className='banner--image' src={`${imageUrl}${moviesData.backdrop_path}`} alt={moviesData?.title} />
                <div className=" banner--content top-[10%] sm:top-[20%] p-4 md:p-8">
                    <h3 className="banner--title">{moviesData?.title || moviesData?.name || moviesData?.original_title}</h3>
                    <div className="banner--buttons z-50">
                        <button className='banner--playButton'>play</button>
                       <Link to='/mylist'> <button className='banner--myListButton'> MyList</button></Link>
                    </div>
                    <p className='banner--date'>Released: {moviesData?.release_date}</p>
                    <p className=" banner--description">{truncate(moviesData?.overview, 144)}</p>
                </div>
            </div>
        </section>
    )
}

export default Banner



