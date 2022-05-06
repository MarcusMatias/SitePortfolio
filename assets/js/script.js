const Projeto    = document.querySelectorAll("#container1, #projeto1, #titulo1, #texto1, #texto2")
const Projeto1   = document.querySelectorAll("#container2, #projeto2, #titulo2, #texto3, #texto4")
const Projeto2   = document.querySelectorAll("#container3, #projeto3, #titulo3, #texto5, #texto6")

const Sobremimbt = document.querySelector("#sobremimbt")
const Projetosbt = document.querySelector("#projetosbt")
const Contatobt  = document.querySelector("#contatobt")

let Projetos = [Projeto, Projeto1, Projeto2]

const Imagem     = document.querySelector("#projeto1")
const Imagem1    = document.querySelector("#projeto2")
const Imagem2    = document.querySelector("#projeto3")

let boolMostrar = false
let nr = 0

Imagem.addEventListener("click",  function mudaNumero(){nr = 0; mostrarProjeto()})
Imagem1.addEventListener("click", function mudaNumero(){nr = 1; mostrarProjeto()})
Imagem2.addEventListener("click", function mudaNumero(){nr = 2; mostrarProjeto()})

function mostrarProjeto(){
    if(boolMostrar == false){
        Projetos[nr].item(0).classList.add("mostrar")
        Projetos[nr].item(1).classList.add("mostrar")
        Projetos[nr].item(2).classList.add("mostrar")
        Projetos[nr].item(3).classList.add("mostrar")
        Projetos[nr].item(4).classList.add("mostrar")
        boolMostrar = true
    } else {
        Projetos[nr].item(0).classList.remove("mostrar")
        Projetos[nr].item(1).classList.remove("mostrar")
        Projetos[nr].item(2).classList.remove("mostrar")
        Projetos[nr].item(3).classList.remove("mostrar")
        Projetos[nr].item(4).classList.remove("mostrar")
        boolMostrar = false
    }
}

Sobremimbt.addEventListener("click", function DescePagina1(){window.scroll({top:1300, behavior: 'smooth'})})
Projetosbt.addEventListener("click", function DescePagina1(){window.scroll({top:645, behavior: 'smooth'})})
Contatobt.addEventListener ("click", function DescePagina1(){window.scroll({top:1700, behavior: 'smooth'})})




//married at 02 30 2022
