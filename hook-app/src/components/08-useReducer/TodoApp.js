import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TaskList } from './TaskList'
import { AddTask } from './AddTask'

import '../../index.css'

const init = () => {
	return JSON.parse(localStorage.getItem('tasks')) || []
}

let nextId = 1

export const TodoApp = () => {
    const [tasks, dispatch] = useReducer(todoReducer, [], init)

	useEffect( () => {
		localStorage.setItem('tasks', JSON.stringify( tasks ))
	},[tasks])

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

    const handleAdd = ( newTask ) => {
        dispatch({
            type: 'add',
            payload: {
                id: nextId ++,
                task: newTask,
                done: false
            }
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
            
            <AddTask handleAdd={ handleAdd } />
        </>
    )
}