let bmi1;

document.querySelector('.verify1').addEventListener('click', function() {

  const inaltime1 = document.querySelector('.inputInaltime1').value;
  const greutate1 = document.querySelector('.inputGreutate1').value;
  bmi1 = greutate1 / (inaltime1 ** 2);

  document.querySelector('.result').textContent = (`BMI-ul tău este ${bmi1}.`);

  if (bmi1 < 18.5) {
    document.querySelector('.more').textContent = "BMI-ul tău reprezintă un indice subponderal.";
  } else if ((bmi1 > 18.5) && (bmi1 < 24.9)) {
    document.querySelector('.more').textContent = "BMI-ul tău reprezintă un indice de greutate normală și sănătoasă.";
  } else if ((bmi1 > 25) && (bmi1 < 29.9)) {
    document.querySelector('.more').textContent = "BMI-ul tău reprezintă un indice supraponderal.";
  } else {
    document.querySelector('.more').textContent = "BMI-ul tău reprezintă un indice de obezitate.";
  };

});
