import React, { useEffect, useReducer, useRef } from 'react'
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

export const TodoApp = () => {
    const [tasks, dispatch] = useReducer(todoReducer, [], init)
    const [{ task }, handleInputChange, reset] = useForm([])

	useEffect( () => {
		localStorage.setItem('tasks', JSON.stringify( tasks ))
	},[tasks])

    const handleSubmit = ( e ) => {
        e.preventDefault()

        if(task === undefined || task?.trim().length <= 1) return

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

            <div>
                {
                    tasks.map(todo => 
                        <div className='todo-list' key={ todo.id }>
                            <div className='container'>
                                <input className='checkbox' type='checkbox' />
                                <div 
                                    onClick={ () => handleToggle( todo.id ) }
                                    className= {`${ todo.done && 'complete' }`}
                                > 
                                    { todo.task } 
                                </div>
                            </div>
                            <button onClick={ () => handleDelete( todo.id ) } className='btn-delete'>Delete</button>
                        </div>
                    )
                }
            </div>
            
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