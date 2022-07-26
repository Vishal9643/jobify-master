export const Statuscart = ({ count, icon, color, jobstatus }) => {
 return (
  <>
   <article style={{color,borderBottom: `5px solid ${color}`}} className="cart">
    <header>
     <span className="count">{count}</span>
     <span className="icon">
      {icon}
     </span>
    </header>
    <h5 className="title">{jobstatus}</h5>
   </article>
  </>
 )
}