import React from 'react'

export const TaskItem = React.memo(({ task, handleDelete, handleToggle }) => {
    return (
        <>
            <div className='task-grid' key={ task.id }>
                <div className='container'>
                    <input className='checkbox' type='checkbox' />
                    <div 
                        onClick={ () => handleToggle( task.id ) }
                        className= {`${ task.done && 'complete' }`}
                    > 
                    { task.task } 
                    </div>
                </div>
                <button onClick={ () => handleDelete( task.id ) } className='btn-delete'>Delete</button>
            </div>
        </>
    )
})