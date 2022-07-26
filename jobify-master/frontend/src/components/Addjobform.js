import { Inputdropdown, Inputframe } from "./input"
import { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux"
import { addjob, removeaddjobstatus, Updatejobdata } from "../reducer/Job";

export const Addjobform = () => {

  const { addjobstatus, editjobitem } = useSelector(store => store.job)
  const dispatch = useDispatch()


  let [jobdata, setjobdata] = useState(editjobitem ? editjobitem : {
    position: null,
    company: null,
    joblocation: null,
    status: null,
    jobtype: null
  })

  let [status, setstatus] = useState(false)
  let [wait, setwait] = useState(false)

  const removestatus = () => {
    setTimeout(() => {
      dispatch(removeaddjobstatus())
    }, 4000)
  }

  if (status) {
    setTimeout(() => {
      setstatus(false)
    }, 4000)
  }

  useEffect(()=>{
    console.log(addjobstatus)
    if(addjobstatus){
      setwait(false)
    }
  })


  return (
    <>
      <section className="formblock">
        <div className="container">

          <form  onSubmit={(event) => {
            editjobitem ? setstatus(!status) : setwait(!wait)
            dispatch(editjobitem ? Updatejobdata({ data: jobdata, id: editjobitem.id }) : addjob(jobdata))
            removestatus()
            event.preventDefault();
          }} className="form">
            <h4>{editjobitem ? 'Edit Job' : 'Add Job'}</h4>
            <div className="form-center">


              <Inputframe value={jobdata.position} jobdata={jobdata} setjobdata={setjobdata} type={'text'} name={"position"} />
              <Inputframe value={jobdata.company} jobdata={jobdata} setjobdata={setjobdata} type={'text'} name={"company"} />
              <Inputframe value={jobdata.joblocation} jobdata={jobdata} setjobdata={setjobdata} type={'text'} name={"joblocation"} />
              <Inputdropdown name={"status"} jobdata={jobdata} setjobdata={setjobdata} value={["all", "interview", "declined", "pending"]} />
              <Inputdropdown name={"jobtype"} jobdata={jobdata} setjobdata={setjobdata} value={["all", "full-time", "part-time", "remote", "internship"]} />


              <div className="btn-container">
                <button type="submit" className="btn_block" >{wait ? 'wait' : "submit"}</button>
              </div>
            </div>
            {
              addjobstatus && (addjobstatus == 'success' ? <Alert style={{ marginTop: '2%' }} severity="success">{addjobstatus}!</Alert> :
                <Alert style={{ marginTop: '2%' }} severity="error">{addjobstatus}!</Alert>)
            }
            {
              status && <Alert style={{ marginTop: '2%' }} severity="success">sucess !</Alert>
            }
          </form>
        </div>
      </section>
    </>
  )
}