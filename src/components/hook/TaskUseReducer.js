import React, { useReducer } from 'react'

const reducer1 = (state, action) => { 
    switch(action) {
        case 'PLUS':
            return state + 1
        case 'MINUS':
            return state - 1
        default: 
            return state
    }
}

const reducer2 = (state, action) => { 
    switch(action) {
        case 'PLUS':
            return state + 10
        case 'MINUS':
            return state - 10
        default: 
            return state
    }
}

const TaskUseReducer = () => {
    const [count1, dispatch1] = useReducer(reducer1, 0)
    const [count2, dispatch2] = useReducer(reducer2, 0)

    return (
        <>
            <div className="d-flex mt-5 justify-content-center">
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick= { () => { dispatch1('MINUS')} }>-</button> 
                <h1><span className="badge bg-secondary">{count1}</span></h1>
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick= { () => { dispatch1('PLUS')} }>+</button> 
                
            </div>
            <div className="d-flex mt-5 justify-content-center">
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick= { () => { dispatch2('MINUS')} }>-</button> 
                <h1><span className="badge bg-secondary">{count2}</span></h1>
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick= { () => { dispatch2('PLUS')} }>+</button> 
                
            </div>
        </>
        
    )
}

export default TaskUseReducer
