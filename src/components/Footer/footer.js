import creditsComponent from '../PhotoCredit/photo_credits';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.css';

const FooterComponent = () => {
  const footer = document.createElement('footer');

  const homeLink = document.createElement('a');
  homeLink.href = './';
  homeLink.textContent = 'Ana Wagner';

  // Limk to GitHub
  const github = document.createElement('a');
  github.href = 'https://github.com/anawagner';
  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fab', 'fa-github');
  github.appendChild(githubIcon);

  const byLine = document.createElement('span');
  byLine.classList.add('byline');
  byLine.appendChild(homeLink);
  byLine.appendChild(github);
  footer.appendChild(byLine);
  
  // photo credits
  const openLink = document.createElement('a');
  openLink.href = '#';
  openLink.textContent = 'photo credits';
  footer.appendChild(openLink);

  const closeLink = document.createElement('a');
  closeLink.href = '#';
  closeLink.textContent = 'X';

  const credits = creditsComponent(closeLink);

  openLink.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.appendChild(credits);
  });

  closeLink.addEventListener('click', (event) => {
    event.preventDefault();
    if (credits) {
      document.body.removeChild(credits);
    }
  });

  

  return footer;
}

export default FooterComponent;