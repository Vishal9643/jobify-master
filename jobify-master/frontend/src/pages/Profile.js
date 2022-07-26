import { useSelector } from "react-redux"
import { Editprofile } from "../components/Editprofile"

export const Profile = () => {

 const {update_user_field_status}=useSelector(store=>store.auth)

 

 return (
  <>
   <div className="dashboardpage">
    <Editprofile />
   </div>
  </>
 )
}