import './styles/main.css';
import './styles/reset.css';
import { HeaderComponent } from './components/Header/header';
import FooterComponent from './components/Footer/footer';
import text from './data/text.json5';
import Sidebar from './components/sidebar';
import Content from './components/content'; 
import { initializeData } from './api/data_manager';
import tasks from './data/tasks.json5';
import projects from './data/projects.json5';


function main(root) {
  initializeData(tasks, projects);

  const header = HeaderComponent(text.title);

  root.appendChild(header);
  const contentElement = document.createElement('main');
  root.appendChild(contentElement);
  contentElement.appendChild(Sidebar());
  contentElement.appendChild(Content());
  root.appendChild(FooterComponent());
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('body');
  main(root);
});

