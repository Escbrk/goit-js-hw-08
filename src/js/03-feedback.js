import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector("[type='email']"),
  textArea: document.querySelector("[name='message']"),
  FEEDBACK_FORM_STATE: 'feedback-form-state',
};

refs.input.addEventListener('input', throttle(onInput, 500));
refs.textArea.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onSubmit);

function onInput(e) {
  const data = {
    email: refs.form.email.value,
    message: refs.form.message.value,
  };

  localStorage.setItem(refs.FEEDBACK_FORM_STATE, JSON.stringify(data));
}

function updateForm() {
  const data = JSON.parse(localStorage.getItem(refs.FEEDBACK_FORM_STATE));

  refs.input.value = data.email;
  refs.textArea.value = data.message;
}

function onSubmit(e) {
  e.preventDefault();

  if (refs.input.value === '' || refs.textArea.value === '') {
    return alert('Все поля должны быть заполнены!');
  }

  const data = {
    email: refs.form.email.value,
    message: refs.form.message.value,
  };

  console.log(data);

  refs.form.reset();
  localStorage.removeItem(refs.FEEDBACK_FORM_STATE);
}

updateForm();
