import text from '../data/text.json5';
import page from '../templates/document.hbs';

const HomeComponent = () => {
  const home = document.createElement('div');
  home.classList.add('home');
  home.innerHTML = page(text.home);
  return home;
}

export default HomeComponent;