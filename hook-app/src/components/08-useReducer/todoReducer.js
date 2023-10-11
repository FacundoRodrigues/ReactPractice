export const todoReducer = ( state = [], action ) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]

        case 'delete':            
        return state.filter(t => t.id !== action.payload);

        case 'toggle-old':            
        return state.map( task => {
            if(task.id === action.payload) {
                return {
                    ...task,
                    done: !task.done
                }
            }
            else return task
        })

        case 'toggle':
        return state.map( task => 
            ( task.id === action.payload ) ? { ...task, done: !task.done } : task
        )
    
        default:
            break;
    }
}