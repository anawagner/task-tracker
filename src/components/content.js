import TaskList from './Tasks/taskList';

const Content = () => {
  const container = document.createElement('div');
  container.className = 'content';

  const title = document.createElement('h2');
  title.textContent = 'Tasks';
  container.appendChild(title);

  const taskList = TaskList();
  container.appendChild(taskList);

  return container;
}

export default Content;