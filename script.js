function init(){
  const content = document.getElementById('content');
  let bin = document.getElementById('bin').value;
  let decimal = 0;

  for(let idx = bin.length -1; idx >= 0; idx--){
    decimal += parseInt(bin[idx]) * Math.pow(2, bin.length -1 -idx);
  }
    
  content.innerHTML += `<h3>${decimal}</h3>`;

  document.getElementById('clear').addEventListener('click', ()=> {
    document.getElementById('bin').value = "";
    content.innerHTML = "";
  });
};