import {ADDTASK, TASKDONE, EDITTASK, DELETETASK} from '../types/todotypes'

const inialState = {
    todos: [
        {
            id:1,
            descr: 'Studying',
            isDone:false
        },
        {
            id:2,
            descr: 'Meeting',
            isDone:false
        },
        {
            id:3,
            descr: 'Shopping',
            isDone:false
        },
        {
            id:4,
            descr: 'Workout',
            isDone:false
        },

    ]
};
const TODOREDUCER= (state=inialState, action)=>{
    switch(action.type){
        case ADDTASK: 
        return {
            ...state,todos:[...state.todos,{ id: Math.random(), descr: action.payload, isDone: false }]
        } ;
       
        case TASKDONE:
            return {
              ...state,
              todos: state.todos.map((el) =>
                el.id == action.payload ? { ...el, isDone: !el.isDone } : el 
              )
            };


            case EDITTASK:
                return {
                  ...state,
                  todos: state.todos.map((el) =>
                    el.id === action.id ? { ...el, descr: action.payload } : el
                  )
                };
            
            case DELETETASK:
                return {...state,todos:state.todos.filter(el=>el.id !== action.payload)}
        default:
            return state;
  
     };
};

export default TODOREDUCER; 