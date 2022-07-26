import Alert from '@mui/material/Alert';
import '../../css/login.css'
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { login, removestatus } from "../../reducer/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Logo } from '../../components/Logo';



export const Login = () => {


 const [logindata, setlogindata] = useState({ email: null, password: null })
 const [wait, setwait] = useState(false)
 const dispatch = useDispatch()
 const { loginstatus, auth } = useSelector((store) => store.auth)
 let navigation = useNavigate();

 if (loginstatus && wait) {
  setwait(false)
 }

 if (loginstatus) {
  setTimeout(() => {
   dispatch(removestatus('L'))
  }, 3000)
 }

 useEffect(() => {
  if (auth && loginstatus == 'success') {
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
       <h1>Login</h1>
       <form onSubmit={(event) => {
        if (!wait) {
         setwait(true)
         dispatch(login(logindata))
        }
        event.preventDefault()
       }} className="form">
        <div>

         <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
          <input type="text" value={logindata.email} onChange={(e) => {
           setlogindata({ ...logindata, email: e.target.value })
          }} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
         </div>


         <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
          <input type="password" value={logindata.password} onChange={(e) => {
           setlogindata({ ...logindata, password: e.target.value })
          }} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
         </div>


         <button type="submit" style={{ width: '100%' }} class="btn btn-primary">{wait ? "Wait" : 'Submit'}</button>


         {loginstatus && (loginstatus == 'success' ?
          <Alert style={{ marginTop: '2%' }} severity="success">{loginstatus}!</Alert> :
          <Alert style={{ marginTop: '2%' }} severity="error">{loginstatus}!</Alert>)}

         <p>Not a member yet?<Link style={{ textDecoration: 'none' }} to={'/register'}>Register</Link></p>



        </div>
       </form>
      </div>

     </div>
    </center>
   </div>
  </>
 )
}