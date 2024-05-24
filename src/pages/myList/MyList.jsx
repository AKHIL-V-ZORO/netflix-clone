import React from 'react'
import banner2 from '../../assets/banner2.jpg'
import NavBar from '../../components/nav/NavBar'
import './Mylist.css'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { useEffect } from 'react'
import { UserAuth } from '../../auth/AuthProvider'
import { useState } from 'react'
import { imageUrl_Row } from '../../constants/url'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const MyList = () => {
  const [listedMovies, setListedMovies] = useState([])
  const { currentUser } = UserAuth()

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${currentUser?.email}`), (doc) => { setListedMovies(doc.data()?.savedShows) })
  }, [currentUser?.email])


  return (
    <>
      <NavBar />
      <div className="mylist">
        <div className="mylist--overlay"></div>
        <img src={banner2} className='mylist--image' />
        <h3 className='absolute top-[40%] left-[10%] text-3xl font-bold'>MY Favourite List</h3>
      </div>
      <div className='mylist--row'>
        {
          listedMovies?.map((movie, id) => (
            <div className='mylist--card w-[160px] sm:w-[200px] lg:w-[220px]'>
              <img
                className={`mylist--card--img`}
                src={`${imageUrl_Row}${movie.img}`}
              />
              <div className='mylist--card--fade'>
                <p className='mylist--card--name text-xs md:text-sm'>{movie?.title}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default MyList
