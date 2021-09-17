import React, {useState} from 'react'

const TaskUseState = () => {

    const [count, setCount] = useState(0)

    const decrease = () => {
        setCount(prev => prev - 1)
        setCount(prev => prev - 1)
    }

    const increase = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <button 
                className="btn btn-primary mx-3"
                onClick = {decrease}>-</button>
            <span style={{color: 'blue', fontWeight: "700"}}>{count}</span>
            <button 
                className="btn btn-primary mx-3"
                onClick = {increase}>+</button>
        </div>
    )
}

export default TaskUseState
