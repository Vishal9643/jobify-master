import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { userauth } from "../reducer/auth"
import '../css/Home.css'
import { Homeleftblock } from "../components/Homeleftblock"
import { Homerightblock } from '../components/Homerightblock'



export const Home = () => {
 const { auth } = useSelector(store => store.auth)
 const dispatch = useDispatch()
 const [Home_left_block_togal,set_Home_left_block_togal]=useState(false)
 let navigation = useNavigate();



 useEffect(() => {
  dispatch(userauth())
  if (!auth) {
   navigation('/landing')
  }
 })

 return (
  <>
   <div>

    {
     auth &&
     <>
      <div className="home">
       <Homeleftblock Home_left_block_togal={Home_left_block_togal}/>
       <Homerightblock Home_left_block_togal={Home_left_block_togal} set_Home_left_block_togal={set_Home_left_block_togal}/>
      </div>
     </>
    }

   </div>
  </>
 )
}