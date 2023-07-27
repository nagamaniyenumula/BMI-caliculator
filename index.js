const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  //console.log(height)
  const weight = parseInt(document.querySelector('#weight').value);
  //console.log(weight)
  const result = document.querySelector('#result');
  // console.log(weight);
  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = 'enter valid information';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = 'enter valid information';
  } else {
    const bim = (weight / ((height * height) / 1000)).toFixed(2);

    if (bim <= 18.6) {
      result.innerHTML = `<span>${bim} over weight</span>`;
    }
    if (bim >= 18 && bim <= 24) {
      result.innerHTML = `<span>${bim} over weight</span>`;
    }
    if (bim >= 25) {
      result.innerHTML = `<span>${bim} over weight</span>`;
    }
  }
});
