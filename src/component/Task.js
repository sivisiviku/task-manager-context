import './Task.css'
import Card from './Card'
import UpdateModal from './UpdateModal'
import { useContext, useState } from 'react'
import TaskContext from '../store/task-context'

function Task(props) {
    const ctx = useContext(TaskContext)

    const [openUpdateTaskForm, setOpenUpdateTaskForm] = useState(false)

    function handleDelete() {
        ctx.handleDelete(props.task.id)
    }
    function openUpdateForm() {
        setOpenUpdateTaskForm(true)
    }
    function onCancel() {
        setOpenUpdateTaskForm(false)
    }
    function onUpdate(task) {
        ctx.onUpdate(task)
        setOpenUpdateTaskForm(false)
    }
    return <>
        {
            openUpdateTaskForm && <UpdateModal 
                task={props.task} 
                onCancel={onCancel} 
                onUpdate={onUpdate}>
            </UpdateModal>
        }
        <Card>
            <li className='task'>
                <h4>{props.task.title}</h4>
                <small>Due: {props.task.dueDate}</small>
                <p>{props.task.description}</p>
                <div className='action'>
                    <button onClick={openUpdateForm} style={{marginRight: '5px'}}>Update</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </li>
        </Card>
    </>
}

export default Task