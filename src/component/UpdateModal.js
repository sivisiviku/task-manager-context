import ReactDOM from "react-dom"
import './UpdateModal.css'
import Card from './Card'
import { useRef, useState } from 'react'

function Backdrop(props) {
    return <div className="backdrop" onClick={props.onCancel}></div>
}

function ModalOverlay(props) {
    const title = useRef()
    const dueDate = useRef()
    const description = useRef()
    const [validTitle, setValidTitle] = useState(true)
    const [validDueDate, setValidDueDate] = useState(true)
    const [validDescription, setValidDescription] = useState(true)

    function onUpdate() {
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
            id: props.task.id,
            title: title.current.value,
            dueDate: dueDate.current.value,
            description: description.current.value
        }

        props.onUpdate(task)

        title.current.value = ''
        dueDate.current.value = ''
        description.current.value = ''
    }

    return <Card className='modal'>
        <div className='inputForm'>
            <label>Title</label>
            <input defaultValue={props.task.title} className={`${!validTitle ? 'invalid' : ''}`} ref={title} type="text" placeholder="title"></input>
        </div>
        <div className='inputForm'>
            <label>Due Date</label>
            <input defaultValue={props.task.dueDate} className={`${!validDueDate ? 'invalid' : ''}`} ref={dueDate} type="date"></input>
        </div>
        <div className='inputForm'>
            <label>Description</label>
            <textarea defaultValue={props.task.description} className={`${!validDescription ? 'invalid' : ''}`} ref={description}></textarea >
        </div>
        <div className='buttonForm'>
            <button onClick={props.onCancel} style={{marginRight: '5px'}}>Cancel</button>
            <button onClick={onUpdate}>Update Task</button>
        </div>
    </Card>
}

function UpdateModal(props) {
    return <>
        {
            ReactDOM.createPortal(
                <Backdrop onCancel={props.onCancel}></Backdrop>,
                document.getElementById('backdrop-root')
            )
        }
        {
            ReactDOM.createPortal(
                <ModalOverlay 
                    task={props.task} 
                    onCancel={props.onCancel} 
                    onUpdate={props.onUpdate}
                ></ModalOverlay>,
                document.getElementById('overlay-root')
            )
        }
    </>
}

export default UpdateModal