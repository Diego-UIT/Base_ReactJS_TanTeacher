import React from 'react'

const Footer = (props) => {
    const { app, setStatus, markCheckAll, removeChecked } = props

    return (
        <div className="mt-5 d-flex justify-content-between">
            <div>
                <input 
                    type="checkbox"
                    checked = { app.checkAll }
                    onChange= { markCheckAll }/>
                <span className="itemStudent">
                    ({app.list.filter(student => (student.checked === true)).length})
                    students
                </span>
            </div>
            <div>
                <button 
                    className="btn btn-outline-primary mx-1"
                    onClick= { () => setStatus('ALL')}>All</button>
                <button 
                    className="btn btn-outline-primary mx-1"
                    onClick= { removeChecked }>Remove checked</button>
                <button 
                    className="btn btn-outline-primary mx-1"
                    onClick= { () => setStatus('FILTER NO CHECKED') }>Filter no checked</button>
                <button 
                    className="btn btn-outline-primary mx-1"
                    onClick= { () => setStatus('FILTER CHECKED') }>Filter checked</button>
            </div>
        </div>
    )
}

export default Footer
