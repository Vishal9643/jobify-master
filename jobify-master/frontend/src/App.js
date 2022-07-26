import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Addjob } from './pages/Addjob'
import { Alljobs } from './pages/Alljobs'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { Home } from './pages/Home'
import { Landing } from './pages/Landing'
import { Profile } from './pages/Profile'
import { Status } from './pages/Status'



export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}>
            <Route exact path='/status' element={<Status />} />
            <Route exact path='/alljobs' element={<Alljobs />} />
            <Route exact path='/addjob' element={<Addjob />} />
            <Route exact path='/profile' element={<Profile />} />
          </Route>
          <Route path='landing' element={<Landing />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}