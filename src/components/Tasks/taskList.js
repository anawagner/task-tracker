import './tasks.css';
import TaskItem from './taskItem';
import { getTasks, updateTask } from '../../api/data_manager';

const TaskList = () => {
    const taskList = document.createElement('div');
    taskList.classList.add('task-list');


    const tasks = getTasks();
    const onUpdate = (task) => {
        console.log('Task updated, refresh list', task);
        updateTask(task);
    }
    const editingManager = { current: null };

    tasks.forEach(task => {
        const taskElement = TaskItem(task, onUpdate, editingManager);
        taskList.appendChild(taskElement);
    });

    return taskList;
}

export default TaskList;