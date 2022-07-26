import { Logo } from "../components/Logo"
import '../css/Landing.css'
import Button from '@mui/material/Button';
import img1 from '../images/main.f1624efc.svg'
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {  useSelector } from "react-redux";

export const Landing = () => {


 const { auth } = useSelector(store => store.auth)
 const navigation=useNavigate()

 useEffect(() => {
  if (auth) {
   navigation('/')
  }
 }, [auth])


 return (
  <>
   <div class="container">
    <div>
     <Logo margintop={'2%'} />
     <div className="homeblock1">
      <div className="homeblock1col1">
       <h1>job <span>tracking</span> app</h1>
       <p>I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia. Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.</p>
       <Link style={{ textDecoration: 'none' }} to='/login'><Button variant="contained">Login / Register</Button></Link>
      </div>
      <div className="homeblock1col2">
       <img src={img1} />
      </div>
     </div>

    </div>
   </div>

  </>
 )
}