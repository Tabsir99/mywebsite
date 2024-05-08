const input = document.getElementById('user-input');
const result = document.getElementById('results-div');
const check = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');

const valid = /[ \(\)\-]/;


const update = () => {


  let numbers = input.value;
  let refined = numbers.split(valid).join('');


  if (!numbers) {
    alert('Please provide a phone number');
    return;
  }


  if (isNaN(refined) || refined.length < 10 || refined.length > 11) {
    invalid(numbers);
    return;
  }

  const one = /^((1 )|1)?(((\(\d{3}\))|\d{3})(\-| )?)?\d{3}(\-| )?\d{4}$/
;

  if (one.test(numbers)) {

    result.innerText += `
      Valid US number: ${numbers}
    `;
    input.value = ''
    return

  } else {
    invalid(numbers);
  }
};

const invalid = (numbers) => {
  result.innerText += `
    Invalid US number: ${numbers}
  `;
  input.value=''
};



check.addEventListener('click', update);

clear.addEventListener('click', () => {
  result.textContent = '';
  input.value=''
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    check.click();
  }
});
