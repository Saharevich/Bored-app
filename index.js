let pageText = document.querySelector('.bored-text');
let titlePage = document.querySelector('.bored-title');
let descrPage = document.querySelector('.bored-descr');
let btnPage = document.querySelector('.bored-btn');
titlePage.textContent = '🤔 Стало скучно?';
descrPage.textContent = 'Найти, чем заняться';
btnPage.textContent = 'GO!';

btnPage.addEventListener('click', function() {
  renderActive();
  titlePage.innerHTML = 'Ура, теперь не скучно 🔥';
  let BODY = document.querySelector('body');
  BODY.classList.add('body-active');
})

function renderActive() {
  fetch("http://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then((res) => {
    
    const activity = res.activity;

    descrPage.innerHTML = `${activity}`;
  });
}