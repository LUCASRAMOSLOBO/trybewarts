const email = document.getElementById('email');
console.log(email);
const password = document.getElementById('password');
const buttonLogin = document.querySelector('.buttonEntrar');
function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', login);
const btnSubmit = document.getElementById('submit-btn');
btnSubmit.disabled = true;
const chec = document.getElementById('agreement').value;
const agR = document.getElementById('agreement');

function apply() {
  if (chec !== null && chec !== '') {
    document.getElementById('submit-btn').disabled = false;
  }
}
agR.addEventListener('click', apply);
const info = document.getElementById('counter');
const desc = document.querySelector('#textarea');
function caracteres(e) {
  const maxChars = 500;
  const inputLength = desc.value.length;
  if (inputLength >= maxChars) {
    e.preventDefault();
  }
  info.innerHTML = maxChars - inputLength;
}
const primeiraTela = document.getElementById('primeiraTela');
const segundaTela = document.getElementById('form-data');
segundaTela.style.display = 'none';
const nome = document.getElementById('input-name');
const sobreNome = document.getElementById('input-lastname');
const email2 = document.getElementById('input-email');
const casa = document.getElementById('house');
const texto = document.getElementById('textarea');
let string = '';
const label1 = document.querySelector('.label1');
const label2 = document.querySelector('.label2');
const label3 = document.querySelector('.label3');
const label4 = document.querySelector('.label4');
const label5 = document.querySelector('.label5');
const label6 = document.querySelector('.label6');
const label7 = document.querySelector('.label7');
function enviar() {
  const familia = document.querySelector('input[name="family"]:checked');
  const rate = document.querySelector('input[name="rate"]:checked');
  const conteudo = document.querySelectorAll('input[name="checkbox"]:checked');
  for (let i = 0; i < conteudo.length; i += 1) {
    string += ''.concat(conteudo[i].value);
    if (i !== conteudo.length - 1) {
      string += ', ';
    }
  }
  primeiraTela.style.display = 'none';
  segundaTela.style.display = 'flex';
  label1.innerHTML += ''.concat(nome.value, ' ', sobreNome.value);
  label2.innerHTML += ''.concat(email2.value);
  label3.innerHTML += ''.concat(casa.value);
  label4.innerHTML += ''.concat(familia.value);
  label5.innerHTML += ''.concat(string);
  label6.innerHTML += ''.concat(rate.value);
  label7.innerHTML += ''.concat(texto.value);
}
btnSubmit.addEventListener('click', enviar);
desc.addEventListener('input', caracteres);
