import { Jobdisplaycart } from "./Jobdisplaycart"

export const Jobsdisplay = ({ alljobsdata_clone }) => {

  
 return (
  <>
   <div className="container">
    <section className="dashboardpagealljobs_display_data">
     {
      alljobsdata_clone.length > 0 ?
       <>
        {
          alljobsdata_clone.map((val) => {
          return (
           <>
            <Jobdisplaycart id={val._id} company={val.company} position={val.position} joblocation={val.joblocation} status={val.status} jobtype={val.jobtype}  />
           </>
          )
         })
        }
       </> : <>
        <h2>No jobs to display...</h2>
       </>
     }
    </section>
   </div>

  </>
 )
}