import React from 'react'
import { TaskItem } from './TaskItem'

export const TaskList = ({ tasks, handleDelete, handleToggle }) => {
    console.log('TaskItem ')
    return (
        <>
            <div>
            {
                tasks.map( task => 
                    <TaskItem 
                        key={task.id} 
                        task={ task } 
                        handleDelete={ handleDelete } 
                        handleToggle={ handleToggle } 
                    />
                )
            }
            </div>
        </>
    )
}