

let inputNomeRef = document.querySelector("#input_nome")

let inputTituloreview = document.querySelector("#input_tituloreview")

let inputImagem = document.querySelector("#input_imagem")

let inputDescriçao = document.querySelector("#input_descricao")

let botonForm = document.querySelector(".botonForm")

let formularioRef = document.querySelector("#section_review")

const mensagemErro = document.querySelector(".erro_mensagem");



let formaHasError = {
  nome: true,
  tituloreview: true,
  IMG: true,
  descricao: true
}


  
/// avaliar os imput
function validarInput(event){
  const target = event.target
  const isValid = target.checkValidity()

  if(isValid){

    target.classList.remove("error")
    formaHasError[target.name] = false
    target.nextElementSibling.textContent = ""

}else{
  target.nextElementSibling.textContent = "Valor inválido";
  formaHasError[target.name] = true
  target.classList.add("error")
    
}



disabledButtonErro()

}


// enviar formulario
function sentForm (){

 let nome  = inputNomeRef.value

 let tituloreview =  inputTituloreview.value

 let img = inputImagem.value

 let descricao = inputDescriçao.value

 formularioRef.classList.add("section_review")

 formularioRef.innerHTML +=`
 <div class="card_newreview">
 <img src="${img}" class="newreview-img-top" alt="...">
 <div class="text-description">
   <h2 class="card-nome">${nome}</h2>
   <h3 class="card-apelido">${tituloreview}</h3>
   <p class="carde-descricao">${descricao}</p>
 </div>
</div>
 `
}

//deshabilitar botao
function disabledButtonErro()
{  
  if(!formaHasError.nome && !formaHasError.tituloreview && !formaHasError.IMG && !formaHasError.descricao)
  {
      botonForm.disabled = false     
  }
  else
  {  
    botonForm.disabled = true
  }
}


inputNomeRef.addEventListener("keyup",(event)=>validarInput(event))
inputTituloreview.addEventListener("keyup",(event)=>validarInput(event))
inputImagem.addEventListener("keyup",(event)=>validarInput(event))
inputDescriçao.addEventListener("keyup",(event)=>validarInput(event))

botonForm.addEventListener('click',()=> sentForm())


