export const Inputframe = ({ type, name, value, setjobdata, jobdata }) => {
 return (
  <>
   <div className="form-row">
    <label htmlFor="search" className="form-label">{name}</label>
    <input type={type} value={value}  name={name} onChange={(e) => {
     setjobdata({ ...jobdata, [e.target.name]: e.target.value })
    }} className="form-input" />
   </div>
  </>
 )
}



export const Inputdropdown = ({ name, value, setjobdata, jobdata }) => {
 return (
  <>
   <div className="form-row">
    <label htmlFor={name} className="form-label">{name}</label>
    <select name={name} onChange={(e) => {
     setjobdata({ ...jobdata, [e.target.name]: e.target.value })
    }} className="form-select">
     {
      value.map((val) => {
       return (
        <option value={val}>{val}</option>
       )
      })
     }
    </select>
   </div>
  </>
 )
}