import { validation } from './validation/validation';

function validator() {
  const input = document.getElementById('input') as HTMLInputElement | null;
  const buttonValidate = document.getElementById('validation-btn');
  const buttonClear = document.getElementById('cleanup-btn');
  const result = document.getElementById('result') as HTMLDivElement | null;

  buttonValidate?.addEventListener('click', () => {
    result && validation(input?.value, result);
  });

  buttonClear?.addEventListener('click', () => {
    input && (input.value = '');
    result && (result.innerHTML = '');
  });
}

validator();
