
import React from 'react'
import Banner from '../../components/banner/Banner'
import NavBar from '../../components/nav/NavBar'
import RowPost from '../../components/row-post/RowPost'
import requests from '../../constants/requests'
import './HomeScreen.css'




const HomeScreen = () => {




  return (
    <div className='home--screen'>
      <NavBar />
      <Banner />
      <RowPost title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNowPlaying} isLarge={true} rowId="1" />
      <RowPost title="TOPRATED" fetchUrl={requests.fetchTopRated} rowId="2"  />
      <RowPost title="ANIME" fetchUrl={requests.fetchAnime} rowId="3" />
      <RowPost title="TRENDING" fetchUrl={requests.fetchTrending} rowId="4" />
      <RowPost title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} rowId="5"  />
      <RowPost title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} rowId="6"  />
      <RowPost title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} rowId="7"  />
    </div>
  )
}

export default HomeScreen
