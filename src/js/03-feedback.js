import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector("[type='email']"),
  textArea: document.querySelector("[name='message']"),
  submitBtn: document.querySelector('[type="submit"]'),
};
const FEEDBACK_FORM_STATE = 'feedback-form-state';
const FEEDBACK_VALUE = JSON.stringify(refs.textArea.value.textContent);

const objData = {};

refs.input.addEventListener('input', onInput);

function onInput(e) {
  e.preventDefault();

  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(FEEDBACK_VALUE));
}

console.log(FEEDBACK_VALUE);
console.log(refs.input);
console.log(refs.textArea);
console.log(refs.submitBtn);

localStorage.setItem(FEEDBACK_FORM_STATE, FEEDBACK_VALUE);

console.log(localStorage.getItem(FEEDBACK_FORM_STATE));
