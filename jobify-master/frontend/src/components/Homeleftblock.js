import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Logo } from "../components/Logo"
import { Link } from 'react-router-dom';



export const Homeleftblock = ({Home_left_block_togal}) => {
 return (
  <>
   <div className="homeleftblock" id={Home_left_block_togal && 'homeleftblock'}>
    <Logo margintop={'6%'} marginleft={'15%'} />
    <div className="nav-links">
     <Link to={'/status'} style={{ textDecoration: 'none',color:'black' }}><span>
      <BarChartIcon className="icon" />
      <h5>status</h5>
     </span></Link>

     <Link to={'/alljobs'} style={{ textDecoration: 'none',color:'black' }}><span>
      <TimelineIcon className="icon" />
      <h5>all jobs</h5>
     </span></Link>

     <Link to={'/addjob'} style={{ textDecoration: 'none',color:'black' }}><span>
      <ListAltIcon className="icon" />
      <h5>add job</h5>
     </span></Link>

     <Link to={'/profile'} style={{ textDecoration: 'none',color:'black' }}><span>
      <PermContactCalendarIcon className="icon" />
      <h5>profile</h5>
     </span></Link>
    </div>
   </div>
  </>
 )
}