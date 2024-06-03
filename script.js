let tema = "claro"

const botaoTema = document.querySelector(".tema button")
botaoTema.addEventListener("click", trocarTela)

const body = document.querySelector("body")

function trocarTela(){
    if(localStorage.getItem("tema")){
        tema = localStorage.getItem("tema")
    }

    if (tema==="claro"){
        body.classList.add("escuro")
        localStorage.setItem("tema", "escuro")
    } else{
        body.classList.remove("escuro")
        localStorage.setItem("tema", "claro")
    }
}

function verificarTema(){
    if(localStorage.getItem("tema")){
        tema = localStorage.getItem("tema")
    }

    if (tema === "escuro") {
        body.classList.add("escuro")
    }
}

verificarTema()