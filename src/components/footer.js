import text from '../data/text.json5';
import creditsComponent from '../components/photo_credits';

const FooterComponent = () => {
  const footer = document.createElement('footer');
  const p = document.createElement('p');
  p.textContent = text.footer.text;
  footer.appendChild(p);

  const homeLink = document.createElement('a');
  homeLink.href = './';
  homeLink.textContent = 'home';
  const homeLinkContainer = document.createElement('p');
  homeLinkContainer.appendChild(homeLink);
  footer.appendChild(homeLinkContainer);

  const openLink = document.createElement('a');
  openLink.href = '#';
  openLink.textContent = 'photo credits';
  const linkContainer = document.createElement('p');
  linkContainer.appendChild(openLink);
  footer.appendChild(linkContainer);

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