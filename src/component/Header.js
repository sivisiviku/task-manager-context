import TaskContext from '../store/task-context'
import './Header.css'
import { useContext, useRef } from 'react'

function Header() {
    const ctx = useContext(TaskContext)

    const keyword = useRef()

    function handleSearch() {
        ctx.handleSearch(keyword.current.value)
    }

    return <nav>
        <div style={{marginRight: '10px'}}>
            <input ref={keyword} style={{marginRight: '5px'}} type='text' placeholder='search...'></input>
            <button onClick={handleSearch}>Search</button>
        </div>
        <button onClick={() => ctx.newTask(true)}>New Task</button>
    </nav>
}

export default Header