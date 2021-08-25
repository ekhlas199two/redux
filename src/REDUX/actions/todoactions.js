import {ADDTASK,DELETETASK,EDITTASK,TASKDONE} from '../types/todotypes'

export const addtask = (Text) => {
    return { type: ADDTASK, payload: Text };
  };

  export const taskdone=(id)=>{
    return { type: TASKDONE, payload: id };
  };

export const edittask=(id)=>{
    return {type: EDITTASK, payload:id}
};

export const deletetask =(payload)=>{
    return {type:DELETETASK, payload}
}
