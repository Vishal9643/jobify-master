import { useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom";
import { Logout_button } from "./Logout_button";
import MenuIcon from '@mui/icons-material/Menu';

export const Homerightblock = ({ Home_left_block_togal, set_Home_left_block_togal }) => {

 let navigation = useNavigate();

 useEffect(() => {
  navigation('/status')
 }, [])

 return (
  <>
   <div className="homerightblock">
    <div className="navbar">
     <MenuIcon onClick={() => {
      set_Home_left_block_togal(!Home_left_block_togal)
     }} />
     <h2>Dashboard</h2>
     <Logout_button navigation={navigation} />
    </div>
    <div>
     <Outlet />
    </div>
   </div>
  </>
 )
}