import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filter_in_job_data, clear_filter_job_data } from "../reducer/Job"
import { Inputdropdown, Inputframe } from "./input"

export const Searchform = () => {

 let [jobdata, setjobdata] = useState({
  search: null,
  status: null,
  type: null,
  sort: null,
 })

 const { alljobsdata } = useSelector(store => store.job)
 const dispatch = useDispatch()



 useEffect(() => {
  alljobsdata && dispatch(filter_in_job_data(jobdata))
 }, [jobdata])

 return (
  <>
   <section className="formblock">
    <div class="container">


     <form onSubmit={(event) => {
      dispatch(clear_filter_job_data())
      event.preventDefault()

     }} className="form">
      <h4>search form</h4>
      <div className="form-center">
       <Inputframe jobdata={jobdata} setjobdata={setjobdata} type={'text'} name={"search"} />
       <Inputdropdown jobdata={jobdata} setjobdata={setjobdata} name={"status"} value={["all", "interview", "declined", "pending"]} />
       <Inputdropdown jobdata={jobdata} setjobdata={setjobdata} name={"type"} value={["all", "full-time", "part-time", "remote", "internship"]} />
       <Inputdropdown jobdata={jobdata} setjobdata={setjobdata} name={"sort"} value={["latest", "oldest", "a-z", "z-a"]} />
       <button className="btn_block">clear filters</button>
      </div>
     </form>


    </div>
   </section>
  </>
 )
}