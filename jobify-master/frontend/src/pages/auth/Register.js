import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import { register, removestatus, userInfo } from '../../reducer/auth';
import Alert from '@mui/material/Alert';
import { Logo } from '../../components/Logo';




export const Register = () => {

 const [registerdata, setregisterdata] = useState({ name: null, email: null, password: null })
 const [wait, setwait] = useState(false)
 const dispatch = useDispatch()
 const { registerstatus, auth } = useSelector((store) => store.auth)
 let navigation = useNavigate();


 if (registerstatus && wait) {
  setwait(false)
 }

 if (registerstatus) {
  setTimeout(() => {
   dispatch(removestatus('R'))
  }, 3000)
 }

 useEffect(() => {
  if (auth && registerstatus == 'success') {
   navigation('/')
  }
 })



 return (
  <>
   <div>
    <center>
     <div className="login">
      <div className="container">
       <Logo />
       <h1>Register</h1>
       <form onSubmit={(event) => {
        if (registerdata.password.length >= 6) {
         if (!wait) {
          setwait(true)
          dispatch(register(registerdata))
         }
        }
        event.preventDefault()
       }} className="form">
        <div>
         <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
          <input type="text" value={registerdata.name} onChange={(e) => {
           setregisterdata({ ...registerdata, name: e.target.value })
          }} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
         </div>



         <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
          <input type="text" value={registerdata.email} onChange={(e) => {
           setregisterdata({ ...registerdata, email: e.target.value })
          }} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
         </div>


         <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
          <input type="password" value={registerdata.password} onChange={(e) => {
           setregisterdata({ ...registerdata, password: e.target.value })
          }} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
         </div>


         <button type="submit" style={{ width: '100%' }} class="btn btn-primary">{wait ? "Wait" : 'Submit'}</button>


         {registerstatus && (registerstatus == 'success' ?
          <Alert style={{ marginTop: '2%' }} severity="success">{registerstatus}!</Alert> :
          <Alert style={{ marginTop: '2%' }} severity="error">{registerstatus}!</Alert>)}


         <p>Go Back To<Link style={{ textDecoration: 'none' }} to={'/login'}>Login</Link></p>
        </div>
       </form>
      </div>
     </div>
    </center>
   </div>
  </>
 )
}