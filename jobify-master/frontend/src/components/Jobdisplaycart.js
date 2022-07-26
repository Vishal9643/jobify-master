import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deletejobdata, editjobitem } from '../reducer/Job';


export const Jobdisplaycart = ({ company, position, joblocation, status, jobtype, id }) => {

 const dispatch = useDispatch()

 return (
  <>
   <article className="Jobdisplaycart">
    <header>
     <div className="main-icon">{company[0]}</div>
     <div className="info">
      <h5>{position}</h5>
      <p>{company}</p>
     </div>
    </header>
    <div className="content">
     <div className="content-center">
      <div className="sc-eCImPb bQtjko">
       <FmdGoodIcon className="icon" />
       <span className="text">{joblocation}</span>
      </div>
      <div className="sc-eCImPb bQtjko">
       <CalendarMonthIcon className="icon" />
       <span className="text">Jul 5th, 2022</span>
      </div>
      <div className="sc-eCImPb bQtjko">
       <WorkIcon className="icon" />
       <span className="text">{jobtype}</span>
      </div>
      <div className="status_pending">{status}</div>
     </div>
     <footer>
      <div className="actions">
       <Link style={{ textDecoration: 'none' }} to={`/addjob`}><Button className='edit' variant="contained" onClick={() => {
        dispatch(editjobitem({ company, position, joblocation, status, jobtype, id }))
       }}>Edit</Button></Link>
       <Button className='delete' onClick={() => {
        dispatch(deletejobdata(id))
       }} variant="contained">Delete</Button>
      </div>
     </footer>
    </div>
   </article>
  </>
 )
}