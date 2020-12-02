const form = document.querySelector('.center');

const render = (fragment) => {
  const conteiner = document.querySelector('.sopping-list_wrapper');

  if(fragment) {
    conteiner.append(fragment);
    conteiner.style.display = 'flex';
  }
}

const makeSoppingList = (function(formItem, data) {
  formItem.style.display = 'none';

  const fragment = document.createDocumentFragment();

  data.forEach(({ type, name, model, year }) => {
    const ul = document.createElement('ul');
    ul.classList.add('sopping-list_item');

    const itemType = document.createElement('li');
    const itemName = document.createElement('li');
    const itemModel = document.createElement('li');
    const itemYear = document.createElement('li');
    itemType.innerHTML = `<b>Type:</b> ${type}`;
    itemName.innerHTML = `<b>Name:</b> ${name}`;
    itemModel.innerHTML = `<b>Model:</b> ${model}`;
    itemYear.innerHTML = `<b>Year:</b> ${year}`;

    ul.append(itemType, itemName, itemModel, itemYear);
    fragment.append(ul)
  })

  render(fragment);

}).bind(null, form);

const getAuthorization = function(event) {
  event.preventDefault();

  const loginValue = form[0].value;
  const passwordValue = form[1].value;

  if(loginValue && passwordValue) {
    ajax({
      url: 'http://localhost:3005/',
      method: 'post',
      data: {
        login: loginValue,
        password: passwordValue
      },
      success(response) {
        const id = response.id;
        if(id) {
          ajax({
            url: 'http://localhost:3005/sopping-list',
            method: 'post',
            data: { id },
            success(response, status) {
              if(status == 200) {
                makeSoppingList(response);
              }
            }
          })
        }
      }
    });
  } else {
    alert('Login or password not entered');
  }

}

form.addEventListener('submit', event => getAuthorization(event));
