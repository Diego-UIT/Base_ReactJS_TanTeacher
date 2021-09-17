import React from 'react'
import { useTheme } from './ListContextTheme'

const TaskUseContext = () => {
    const [list] = useTheme()
    console.log(list)
    return (
        <div>
            {
                list.map((student, index) => {
                    return <h1 key={index}>{student}</h1> 
                })
            }
            <button className="btn btn-primary" >Add</button>
        </div>
    )
}

export default TaskUseContext

//onClick={ () => add('Chicken') }
