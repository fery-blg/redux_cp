import "./filter.css";
import { useNavigate } from "react-router-dom";
function Filter() {
    const navigate=useNavigate()
  return (
    <div>
      <div class="dropdown">
        <span>Filter</span>
        <div class="dropdown-content">
          <p
           onClick={()=>{
            navigate('/?isDone')
           }}
          >done</p>
          <p   onClick={()=>{
            navigate('/?not')
           }}>not yet</p>
          <p    onClick={()=>{
            navigate('/')
           }}>all</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
