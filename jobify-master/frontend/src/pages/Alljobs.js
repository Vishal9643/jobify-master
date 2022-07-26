import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Jobsdisplay } from "../components/Jobsdisplay"
import { Searchform } from "../components/Searchform"
import { alljobstatus } from "../reducer/Job"

export const Alljobs = () => {

 const { alljobsdata_clone,alljobsdata } = useSelector(store => store.job)
 const dispatch = useDispatch()
 const getalljob = () => {
  dispatch(alljobstatus())
 }

 useEffect(() => {
  getalljob()
 }, [])


 return (
  <>
   <div className="dashboardpage">
    <Searchform />
    {alljobsdata ? <Jobsdisplay alljobsdata_clone={alljobsdata_clone}/>:<h1>wait</h1>}
   </div>
  </>
 )
}