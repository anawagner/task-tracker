import creditItemTemplate from '../../templates/credit.hbs';
import data from '../../data/photo_creds.json5';
import './photo_credits.css';

const CreditComponent = (closeLink) => {
  const body = document.createElement('div');
  body.classList.add('credit')

  const creditItems = document.createElement('div');
  creditItems.classList.add('credit-list')
  creditItems.innerHTML = creditItemTemplate(data);
  body.appendChild(creditItems);

  const closeLinkContainer = document.createElement('span');
  closeLinkContainer.classList.add('close-button');
  closeLinkContainer.appendChild(closeLink);
  body.appendChild(closeLinkContainer);

  return body;
};

export default CreditComponent;