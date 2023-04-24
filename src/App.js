import './App.css';
import NewTaskForm from './component/NewTaskForm'
import TaskList from './component/TaskList';
import Header from './component/Header';
import { useContext } from 'react';
import TaskContext from './store/task-context';

function App() {
  const ctx = useContext(TaskContext)

  return (
    <div className='container'>
      <Header></Header>
      {
        ctx.openNewTaskForm && <NewTaskForm></NewTaskForm>
      }
      <TaskList></TaskList>
    </div>
  );
}

export default App;
