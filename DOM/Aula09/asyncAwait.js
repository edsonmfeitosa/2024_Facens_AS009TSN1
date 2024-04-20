async function consultar(event) {
    event.preventDefault()
    let cep = document.querySelector('#cep').value
    if (cep == '') {
        window.alert("Digite o CEP.")
        return
    }
    debugger
    cep = cep.replace('.', '').replace('-', '')
    //let carrega = document.querySelector('#carregando')
    //let carrega = document.getElementById('carregando')
    //carrega.style.visibility = 'visible'
    let x = await consultarCep(cep)
    document.querySelector('#rua').value = x.logradouro
    document.querySelector('#bairro').value = x.bairro
    document.querySelector('#estado').value = x.uf
    //carrega.style.visibility = 'hidden'
}
async function consultarCep(cep) {
    //https://viacep.com.br/ws/18015066/json/
    let url = `https://viacep.com.br/ws/${cep}/json/`
    let resposta = await fetch(url)
    console.log(resposta)
    let dados = await resposta.json()
    console.log(dados)
    return dados
}