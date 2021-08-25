import{useState} from 'react'
import EditItem from './EditItem'
import { deletetask, taskdone } from '../actions/todoactions';
import { useDispatch } from 'react-redux';
const Card =({el})=>{
    const dispatch = useDispatch()

    return(
        <div style={{ display: "flex", marginTop:'50px' }}>
        <p style={{ textDecoration: el.isDone && "line-through" }}>
          {" "}
          {el.descr}
        </p>
        <button style={{marginLeft:'50px', marginRight:'5px', borderRadius:'10px'}}  onClick={() => dispatch(taskdone(el.id))}> DONE</button>
        <EditItem el={el} />
        <button style={{marginLeft:'5px', borderRadius:'10px'}} onClick={()=>
  dispatch(deletetask(el.id))}>DELETE</button>

        
       
      </div>
    )
}
export default Card