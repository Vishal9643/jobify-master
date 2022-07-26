import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useDispatch, useSelector, } from "react-redux";
import { logout } from '../reducer/auth';

export const Logout_button = ({ navigation }) => {

 const { userData } = useSelector(store => store.auth)
 const [dropdown, setdropdown] = useState(false)
 const dispatch = useDispatch()

 return (
  <>
   <div className="btn-container">
    <button type="button" className="btn" onClick={() => {
     setdropdown(!dropdown)
    }}>
     <AccountCircleIcon className="icon" />{userData.name.split(" ")[0]}<ArrowDropDownIcon className="icon" />
    </button>
    {dropdown && <div className="dropdown">
     <button type="button" className="dropdown-btn" onClick={() => {
      dispatch(logout())
      navigation('/landing')
     }}>logout</button>
    </div>}
   </div>
  </>
 )
}