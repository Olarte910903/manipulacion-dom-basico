const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('click', sumarInput);

function sumarInput(){
    event.preventDefault()
    const value  = Number(input1.value) + Number(input2.value);
    resultado.innerText = value;
    
}