document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    const form = document.querySelector("#cadastro-resenha")   
    const titulo = form.exampleFormControlInput1.value
    const resenha = form.exampleFormControlTextarea1.value
    console.log(titulo, resenha)
    console.log("cadastrar")
    
})

/*
function limparErros(){
    const campos = document
        .querySelectorALL("input .is-error, textarea .is-error")
    console.log(campos)
    document
        .querySelectorALL("input .is-error, textarea .is-error")
        .foreach((input) => {console.log("campo com erro")})
    
}

function salvar(tarefa){
    const tarefas = JSON.parse( localStorage.getItem("tarefas"))
    tarefas.push(tarefa)

    localStorage.setItem("tarefas", JSON.stringfy(tarefas))
}
*/



