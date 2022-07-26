import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updatelogindata } from "../reducer/auth"
import { Inputframe } from "./input"

export const Editprofile = () => {

 const { userData } = useSelector(store => store.auth)
 const dispatch=useDispatch()

 let fullname=userData.name.split(" ")


 const [edit,setedit]=useState({
  Name:fullname[0],
  'Last Name':fullname[1] || 'lastname',
  Email:userData.email,
  Location:'Delhi'
 })

 return (<>
  {
   userData && <>
    <section className="formblock">
     <div className="container">
      <form onSubmit={(event) => {
       dispatch(updatelogindata({name:`${edit.Name} ${edit["Last Name"]}`,email:userData.email,newemail:edit.Email,location:edit.Location}))
       event.preventDefault()
      }} className="form">
       <h4>Profile</h4>
       <div className="form-center">
        <Inputframe setjobdata={setedit} value={edit.Name} jobdata={edit} type={'text'} name={"Name"} />
        <Inputframe setjobdata={setedit} value={edit["Last Name"]} jobdata={edit} type={'text'} name={"Last Name"} />
        <Inputframe setjobdata={setedit} value={edit.Email} jobdata={edit} type={'text'} name={"Email"} />
        <Inputframe setjobdata={setedit} value={edit.Location} jobdata={edit} type={'text'} name={"Location"} />
        <div className="btn-container">
         <button type="submit" className="btn_block">submit</button>
        </div>
       </div>
      </form>
     </div>
    </section>
   </>
  }
 </>
 )
}