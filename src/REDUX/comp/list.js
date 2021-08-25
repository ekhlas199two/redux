import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Card from './card';






const List=()=>{
    const todos = useSelector((state)=>state.TODOREDUCER.todos)

    const[filter,setfilter]=useState(false)
    const [isdone,setisDone]=useState(false)
    return(
        <div  className='content'>
            <button   onClick={()=>{setfilter(true); setisDone(true)}} >  done</button>
            <button   onClick={()=>{setfilter(true); setisDone(false)}}  >not done</button>
            <button   onClick={()=>setfilter(false)}  >all</button>
      {
      filter===true && isdone===true ? todos.filter(el=> el.isDone===true).map((el) => ( <Card  el={el} /> )) :
      filter===true && isdone===false ? todos.filter(el=> el.isDone===false).map((el) => ( <Card  el={el} /> )) :
      filter===false ?  todos.map((el) => ( <Card  el={el} /> ))
       : null}
 
  
        </div>
    )
}
export default List