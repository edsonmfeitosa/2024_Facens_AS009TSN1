function consultar(event) {
    event.preventDefault()
    let cep = document.querySelector('#cep').value
    if (cep == '') {
        window.alert("Digite o CEP.")
        return
    }
    cep = cep.replace('.', '').replace('-', '')
    let carrega = document.querySelector('#carregando')
    carrega.style.visibility = 'visible'
    consultarCep(cep).then(dados => {
        document.querySelector('#rua').value = dados.logradouro
        document.querySelector('#bairro').value = dados.bairro
        document.querySelector('#estado').value = dados.uf
        carrega.style.visibility = 'hidden'
    })
}
function consultarCep(cep) {
    //https://viacep.com.br/ws/18015066/json/
    let url = `https://viacep.com.br/ws/${cep}/json/`
    return resposta = fetch(url).then(resposta => resposta.json())
}