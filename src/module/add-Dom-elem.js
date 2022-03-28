const parentUL = document.querySelector('.list');

const creatElements = (desc, index) => {
  const elLi = document.createElement('li');
  const elText = document.createElement('p');
  const elCheckBox = document.createElement('INPUT');
  const hLine = document.createElement('hr');
  const elIcon = document.createElement('box-icon');

  elCheckBox.setAttribute('type', 'checkbox');
  elCheckBox.setAttribute('id', index);
  elCheckBox.className = 'checkbox';
  elCheckBox.className = 'checkbox';
  elText.innerText = desc;
  elIcon.setAttribute('name', 'dots-vertical-rounded');
  elIcon.className = 'li-edit-icon';
  elText.setAttribute('contenteditable', 'true');

  elLi.appendChild(elCheckBox);
  elLi.appendChild(elText);
  elLi.appendChild(elIcon);
  elLi.appendChild(hLine);

  // elLi.appendChild('<box-icon name=\'dots-vertical-rounded\'></box-icon>');
  parentUL.appendChild(elLi);
};

export default { creatElements };