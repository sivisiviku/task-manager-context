import TaskContext from '../store/task-context'
import Card from './Card'
import './NewTaskForm.css'
import { useContext, useRef, useState } from 'react'


function NewTaskForm() {
    const ctx = useContext(TaskContext)

    const title = useRef()
    const dueDate = useRef()
    const description = useRef()
    const [validTitle, setValidTitle] = useState(true)
    const [validDueDate, setValidDueDate] = useState(true)
    const [validDescription, setValidDescription] = useState(true)

    function addTask() {
        if(title.current.value === '') {
            setValidTitle(false)
        } else {
            setValidTitle(true)
        } 
        if(dueDate.current.value === '') {
            setValidDueDate(false)
        } else {
            setValidDueDate(true)
        } 
        if(description.current.value === '') {
            setValidDescription(false)
        } else {
            setValidDescription(true)
        } 
        if(title.current.value === '' || dueDate.current.value === '' || description.current.value === '') {
            return
        }

        const task = {
            title: title.current.value,
            dueDate: dueDate.current.value,
            description: description.current.value
        }

        ctx.addTask(task)

        title.current.value = ''
        dueDate.current.value = ''
        description.current.value = ''
    }

    return <Card>
        <div className='inputForm'>
            <label>Title</label>
            <input className={`${!validTitle ? 'invalid' : ''}`} ref={title} type="text" placeholder="title"></input>
        </div>
        <div className='inputForm'>
            <label>Due Date</label>
            <input className={`${!validDueDate ? 'invalid' : ''}`} ref={dueDate} type="date"></input>
        </div>
        <div className='inputForm'>
            <label>Description</label>
            <textarea className={`${!validDescription ? 'invalid' : ''}`} ref={description}></textarea >
        </div>
        <div className='buttonForm'>
            <button onClick={() => ctx.newTask(false)} style={{marginRight: '5px'}}>Cancel</button>
            <button onClick={addTask}>Add Task</button>
        </div>
    </Card>
}

export default NewTaskForm