const form = document.querySelector('.center');

form.addEventListener('submit', function(event){
  event.preventDefault();
  const loginValue = form[0].value;
  const passwordValue = form[1].value;

  if(loginValue && passwordValue) {
    ajax({
      url: 'http://localhost:3005/',
      method: 'post',
      data: {
        loginValue: loginValue,
        passwordValue: passwordValue
      },
      success(response) {
        id = response.id
      }
    });
  } else {
    alert('Login or password not entered')
  }

})
