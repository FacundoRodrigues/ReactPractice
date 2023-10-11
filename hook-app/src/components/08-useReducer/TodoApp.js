import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'

import '../../index.css'
import { todoReducer } from './todoReducer'
import { TaskList } from './TaskList'

let nextId = 1
const init = () => {
	return JSON.parse(localStorage.getItem('tasks')) || []
}



export const TodoApp = () => {
    const [tasks, dispatch] = useReducer(todoReducer, [], init)
    const [{ task }, handleInputChange, reset] = useForm([])

	useEffect( () => {
		localStorage.setItem('tasks', JSON.stringify( tasks ))
	},[tasks])

    const handleSubmit = ( e ) => {
        e.preventDefault()

        if(task === undefined || task?.trim().length < 1) return

        dispatch({
            type: 'add',
            payload: {
                id: nextId ++,
                task: task,
                done: false
            }
        })

        reset()
    }

    const handleDelete = ( id ) => {
        dispatch({
            type: 'delete',
            payload: id
        })
    }

    const handleToggle = ( id ) => {
        console.log(id)
        dispatch({
            type: 'toggle',
            payload: id
        })
    }

    return (
        <>
            <h1>Todo list ({tasks.length})</h1>
            <hr />

            <TaskList 
                tasks={tasks} 
                handleDelete={ handleDelete } 
                handleToggle={ handleToggle } 
            />
            
            <form onSubmit={ handleSubmit }>
                <div className='form-add'>
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