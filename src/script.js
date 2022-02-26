let senha = document.getElementById('senha')
const modoSenha = document.getElementById('eye')


modoSenha.addEventListener('click', () => {
  if(senha.type == 'password') { senha.type = 'text'
  modoSenha.src = './src/img/eye.svg'
  }
  else if(senha.type == 'text') { 
    senha.type = 'password'
    modoSenha.src = './src/img/eye-inativo.svg'
  }
  else return
})
