import LuggageIcon from '@mui/icons-material/Luggage';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BugReportIcon from '@mui/icons-material/BugReport';
import { Statuscart } from '../components/Statuscart';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { alljobstatus } from '../reducer/Job';



export const Status = () => {


 const { statusvalue } = useSelector((store) => store.job)
 const dispatch = useDispatch()


 const statusdata = [
  {
   count: statusvalue.pending,
   icon: <LuggageIcon className="icon" />,
   color: 'rgb(233, 185, 73)',
   jobstatus: 'Pending Applications',
  }, {
   count: statusvalue.interview,
   icon: <EventAvailableIcon className="icon" />,
   color: 'rgb(100, 122, 203)',
   jobstatus: 'Interviews Scheduled',
  }, {
   count: statusvalue.declined,
   icon: <BugReportIcon className="icon" />,
   color: 'rgb(214, 106, 106)',
   jobstatus: "Jobs Declined",
  }
 ]



 const status = () => {
  dispatch(alljobstatus())
 }


 useEffect(() => {
  status()
 }, [])


 return (
  <>
   <div>
    <div class="dashboardpagestatus">
     <section class="allcart">
      {
       statusdata.map((val) => {
        return (
         <Statuscart count={val.count} icon={val.icon} color={val.color} jobstatus={val.jobstatus} />
        )
       })
      }
     </section>
    </div>
   </div>
  </>
 )
}