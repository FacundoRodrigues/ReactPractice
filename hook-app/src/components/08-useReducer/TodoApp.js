import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'

import '../../index.css'

let nextId = 1
const init = () => {
	return JSON.parse(localStorage.getItem('tasks')) || []
}

const todoReducer = ( state = [], action ) => {
    switch (action.type) {
        case 'add':            
            return [...state, action.payload]
    
        default:
            break;
    }
}

export const TodoApp = () => {
    const [tasks, dispatch] = useReducer(todoReducer, [], init)
    const [{ task }, handleInputChange, reset] = useForm([])

	useEffect( () => {
		localStorage.setItem('tasks', JSON.stringify( tasks ))
	},[tasks])

    const handleSubmit = ( e ) => {
        e.preventDefault()

        if(task === undefined || task?.trim().length <= 1) return
        
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
                        <div className='todo-list' key={ todo.id }>
                            <li> { todo.task } </li>
                            <button className='btn-delete'>Delete</button>
                        </div>
                    )
                }
            </ol>
            
            <form onSubmit={ handleSubmit }>
                <div className='todo-list'>
                    <input
                        type='text'
                        name='task'
                        value={ task || ''}
                        autoComplete='off'
                        onChange={ handleInputChange }
                    />
                    <button>Add</button>
                </div>
            </form>
        </>
    )
}