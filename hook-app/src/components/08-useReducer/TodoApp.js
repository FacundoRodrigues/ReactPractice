import React, { useReducer, useState } from 'react'

let nextId = 1
const initialTasks = []

const todoReducer = ( state = [], action ) => {
    switch (action.type) {
        case 'add':            
            return [...state, action.payload]
    
        default:
            break;
    }
}

export const TodoApp = () => {
    const [tasks, dispatch] = useReducer(todoReducer, initialTasks)
    const [formValues, setFormValues] = useState({
        task: ''
    })

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...initialTasks,
            [target.name] : target.value
        })
    }

    const reset = () => {
        console.log(initialTasks)
        // setFormValues(initialTasks)
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()

        const task = formValues.task
        console.log(task)
        
        const newTask = {
            id: nextId ++,
            task: task,
            done: false
        }

        dispatch({
            type: 'add',
            payload: newTask
        })

        reset()
    }

    return (
        <>
            <h1>Todo Reducer</h1>
            <hr />

            <ol>
                {
                    tasks.map(todo => 
                        <li key={ todo.id }> { todo.task } </li>
                    )
                }
            </ol>
            
            <form onSubmit={ handleSubmit }>
                <input
                    type='text'
                    name='task'
                    value={ formValues.task }
                    autoComplete='off'
                    onChange={ handleInputChange }
                />
                <button>Add</button>
            </form>
        </>
    )
}