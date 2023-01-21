import Savetodo from '../services/Savetodo';

const toDoReducer =(state = [], action)=>{
    switch(action.type){
        case 'InitList':
            return action.data
        case 'NewToDo':
            return [...state,action.data]
        case 'Update':
            return state.map((toDo) => (toDo.id !== action.data.id ? toDo : action.data))
        default:
            return state
    }
}

export const initList =()=>{
    return async(dispatch)=>{
        const toDo = await Savetodo.getAll()
        dispatch({
            type:'InitList',
            data: toDo
        })
    }
}

export const newToDo =(content) =>{
    return async(dispatch)=>{
        const newtodo = await Savetodo.create(content)
        dispatch({
            type: 'NewToDo',
            data: newtodo
        })
    }
}

export const updateToDo =(content)=>{
    return async(dispatch)=>{
        const update = await Savetodo.update(content)
        dispatch({
            type:'Update',
            data: update
        })
    }
}


export default toDoReducer