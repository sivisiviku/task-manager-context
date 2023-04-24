import { useContext } from 'react'
import Task from './Task'
import './TaskList.css'
import TaskContext from '../store/task-context'

function TaskList() {
    const ctx = useContext(TaskContext)

    return <ul>
        {
            ctx.tasks.map(task => 
                <Task 
                    task={task} 
                    key={task.id}>
                </Task>
            )
        }
    </ul>
}

export default TaskList