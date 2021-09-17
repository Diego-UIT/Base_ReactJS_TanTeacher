import React, {useState, useEffect} from 'react'
import Student from './Student'
import FormAdd from './FormAdd'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const StudentList = () => {
    
    const [list, setList] = useState([
        {
            id : 1,
            name: "Nguyen Van A",
            checked: true
        },
        {
            id : 2,
            name: "Nguyen Van B",
            checked: false
        },
        {
            id : 3,
            name: "Nguyen Van C",
            checked: false
        },
    ])

    const [status, setStatus] = useState('ALL')
    const [checkAll, setCheckAll] = useState(false)
    const [searchKey, setSearchKey] = useState('')

    const getList = () => {
        if (searchKey) {
            return list.filter(student => {
                return student.name.toLowerCase().includes(searchKey.toLowerCase())
            })
        }
        if (status === 'ALL') {
            return list
        } 
        else if (status === 'FILTER NO CHECKED') {
            return list.filter(student => (student.checked === false))
        }
        else if (status === 'FILTER CHECKED') {
            return list.filter(student => (student.checked === true))
        } 
        else {
            return list
        }
    }

    const markCheck1 = (id) => {
        const temp = list.map(student => (student.id === id) ? {...student, checked: !student.checked} : student)
        setList(temp)
    }

    const markCheckAll = () => {
        setCheckAll(!checkAll)
        const temp = list.map(student => ({...student, checked: !checkAll}))
        setList(temp)
    }

    const reCheckAll = () => {
        let newCheckAll = true

        if (list.length === 0) {
            newCheckAll = false
        } else {
            list.map(student=> {
                if (student.checked === false) {
                    newCheckAll = false
                }
            })
        }
        setCheckAll(newCheckAll)
    }

    useEffect(() => {
        reCheckAll()
    }, [list])

    const add = (student) => {
        setList([...list, student])
        toast.success('Add successfully!')
    }

    const remove = (id) => {
        const temp = list.filter(student => (student.id !== id))
        setList(temp)
        toast.success('Remove successfully!')
    }

    const markCheck = (id) => {
        // ...student: vẫn giữ nguyên giá trị id, name
        const temp = list.map(student => (student.id === id) ? {...student, checked: !student.checked} : student)
        setList(temp)
    }

    const updateName = (id, name) => {
        const temp = list.map(student => (student.id === id) ? {...student, name: name} : student)
        setList(temp)
    }

    const removeChecked = () => {
        const temp = list.filter(student => (student.checked === false))
        setList(temp)
    }

    return (
        <div className="studentList">
            <ToastContainer />
            <input 
                className="form-control me-2 mb-3" 
                type="search"
                placeholder="Search key..."
                value = {searchKey}
                onChange = {(e) => {
                    setSearchKey(e.target.value)
                    getList()
                }}/>
            <FormAdd add = { add }/>
            { getList().map((student) => {
                return <Student 
                        key = { student.id }
                        student = { student }
                        markCheck = { markCheck }
                        markCheck1 = { markCheck1 }
                        updateName = { updateName }
                        remove = { remove }
                        />
            })}
            <Footer 
                removeChecked = { removeChecked }
                setStatus = { setStatus }
                checkAll = { checkAll }
                markCheckAll = { markCheckAll }
                list = { list }
                />
        </div>
    )
}

export default StudentList
