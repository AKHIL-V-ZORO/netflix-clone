
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './auth/AuthProvider';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import { auth } from './firebase/firebase';
import { DefaultLogin } from './pages/defaultLoginPage/DefaultLogin';
import HomeScreen from './pages/homeScreen/HomeScreen';
import MyList from './pages/myList/MyList';
import ProfileScreen from './pages/profileScreen/ProfileScreen';
import { login, logout, selectUser } from './redux/slice/userSlice';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
 const navigate= useNavigate()

  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(login({ uid: currentUser.uid, email: currentUser.email }))
      } else {
        dispatch(logout())
        navigate('/')
      }
    })

    return unSuscribe;
  }, [])

  console.log(user)
  return (
    <div className='app'>
      <AuthProvider>
        {!user ? (
          <Routes>
            <Route path='/signin' element={<DefaultLogin />} />
            <Route path='/' element={<DefaultLogin />} />
            <Route path='/signup' element={<DefaultLogin />} />
          </Routes>) : (
          <Routes>
            <Route path='/' element={<DefaultLogin />} />
            <Route path='/signin' element={<DefaultLogin />} />
            <Route path='/signup' element={<DefaultLogin />} />
            <Route path='/account' element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
            <Route path='/profile' element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>} />
            <Route path='/mylist' element={<ProtectedRoute><MyList /></ProtectedRoute>} />
          </Routes >)}
      </AuthProvider>
    </div>
  );
}

export default App;
