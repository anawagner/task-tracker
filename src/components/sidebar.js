import { getProjects } from '../api/data_manager';

const Sidebar = () => {
  const container = document.createElement('div');
  container.className = 'sidebar';

  const heading = document.createElement('h2');
  heading.textContent = 'Projects';
  container.appendChild(heading);

  const projects = getProjects();

  if (projects.length === 0) {
    const noProjectsMessage = document.createElement('p');
    noProjectsMessage.textContent = 'No projects available.';
    container.appendChild(noProjectsMessage);
  } else {
    const list = document.createElement('ul');
    projects.forEach(project => {
      const listItem = document.createElement('li');
      listItem.textContent = project.name;
      list.appendChild(listItem);
    });
    container.appendChild(list);
  }

  return container;
}

export default Sidebar;