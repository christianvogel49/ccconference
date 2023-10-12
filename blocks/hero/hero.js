export default async function decorate(block) {
  const picture = block.querySelector('picture');
  const h1 = block.querySelector('h1');
  const rowWrapper = picture.closest('div');
  rowWrapper.classList.add('row-container');
  
  const leftWrapper = document.createElement('div');
  leftWrapper.classList.add('block-left');
  leftWrapper.append(h1);
  
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  const form = document.createElement('form');
  const headline = document.createElement('h2');
  headline.innerText = 'Jobsuche und Projektbörse';
  
  const searchField = document.createElement('div');
  const searchLabel = document.createElement('label');
  searchLabel.innerText = 'Suchbegriff';
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Bitte geben Sie einen Suchbegriff ein';
  searchField.append(searchLabel);
  searchField.append(searchInput);
  
  const cityField = document.createElement('div');
  const cityLabel = document.createElement('label');
  cityLabel.innerText = 'Stadt';
  const cityInput = document.createElement('input');
  cityInput.type = 'text';
  cityInput.placeholder = 'Bitte geben Sie eine Stadt ein';
  cityField.append(cityLabel);
  cityField.append(cityInput);
  
  const buttonField = document.createElement('div');
  const button = document.createElement('button');
  button.textContent = ' Jetzt Jobs finden';
  buttonField.append(button);
  
  form.append(headline);
  form.append(searchField);
  form.append(cityField);
  form.append(buttonField);
  formContainer.append(form);
  leftWrapper.append(formContainer);
  
  const rightWrapper = document.createElement('div');
  rightWrapper.classList.add('block-right');
  
  rowWrapper.append(leftWrapper);
  rowWrapper.append(rightWrapper);
}
  