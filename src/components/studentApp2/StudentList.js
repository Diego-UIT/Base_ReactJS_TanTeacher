import React, {useContext} from 'react'
import Student from './Student'
import FormAdd from './FormAdd'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { listTheme } from './ListContext'

const StudentList = () => {
    
    const [app, add, markCheck, updateName, remove, getList, 
        setStatus, removeChecked, markCheckAll, setSearchKey] = useContext(listTheme)

    return (
        <div className="studentList">
            <ToastContainer />
            <input 
                className="form-control me-2 mb-3" 
                type="search"
                placeholder="Search key..."
                value = {app.searchKey}
                onChange = {(e) => {
                    setSearchKey(e.target.value)
                    getList()
                }}/>
            <FormAdd add = {add} />
            { 
                getList().map((student) => {
                    return <Student 
                            key = { student.id }
                            student = { student }
                            markCheck = { markCheck }
                            updateName = { updateName }
                            remove = { remove }
                            />
            })}
            <Footer 
                app = {app} 
                setStatus = { setStatus }
                removeChecked = { removeChecked }
                markCheckAll = { markCheckAll }/>
        </div>
    )
}

export default StudentList
