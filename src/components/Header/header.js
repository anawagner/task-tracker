import './header.css';
const HeaderComponent = (title) => {
  const HeaderElement = document.createElement('header');
  const titleElement = document.createElement('h1');
  titleElement.classList.add('title');
  titleElement.textContent = title;

  HeaderElement.appendChild(titleElement);
  return HeaderElement;
}

const NavigationComponent = (navItems) => {
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  const ul = document.createElement('ul');
  navItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.id = index;
    const a = document.createElement('a');
    a.id = index;
    a.href = `#${item.name.toLowerCase()}`;
    li.textContent = item.name;
    a.appendChild(li);
    ul.appendChild(a);
  });

  nav.appendChild(ul);
  return nav;
}

export { HeaderComponent, NavigationComponent };