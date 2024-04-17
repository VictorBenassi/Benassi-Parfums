document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    const form = document.querySelector("#cadastro-resenha")   
    const titulo = form.exampleFormControlInput1.value
    const resenha = form.exampleFormControlTextarea1.value
    console.log(titulo, resenha)
    console.log("cadastrar")
    
})



