import {addtask} from '../actions/todoactions' 
import{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';


function AddItem () {
    const todos = useSelector((state)=>state.TODOREDUCER.todos)
    const [val, setval] = useState("");
    const dispatch = useDispatch();

    return(
        <div>
 <input type='text'   onChange={(e)=> setval(e.target.value)} />
 <button style={{marginLeft:'5px'  ,borderRadius:'10px'}} onClick={() => dispatch(addtask(val))}>ADD TASK</button>
        </div>

    )
}
export default AddItem