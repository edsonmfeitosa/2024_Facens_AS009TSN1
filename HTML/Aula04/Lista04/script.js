const materia = window.location.href.split('?')[1].split('=')[1] 
const curso = document.querySelector('#curso')
const valoresParcela = {
    ads: {
        valorParcela : 1234,
        valorTotal: 1234*12,
        valorParcelaText : `R$ ${1234*12},00`,
    },
    psic: {
        valorParcela: 1500, 
        valorTotal: 1500*12,  
        valorParcelaText : `R$ ${1500*12},00`,
    },
    eq: {
        valorParcela: 2100, 
        valorTotal: 2100*12,  
        valorParcelaText : `R$ ${2100*12},00`,
    }
}
function parcelamento() {
    let option = ''
    for (let i = 1; i < 13; i++) {
        option += `<option value="${i}p">${i}x ${materia === 'ads' ? (valoresParcela.ads.valorTotal/i).toFixed(2) : materia === 'psic' ? (valoresParcela.psic.valorTotal/i).toFixed(2) : (valoresParcela.eq.valorTotal/i).toFixed(2)} RS</option>`
    }
    return option
}

curso.innerHTML = `
    <legend>Curso ${materia === 'ads' ? ' Análise e desenvolvimento de sistemas'
: materia === 'psic' ? 'Psicologia' : 'Engenharia Quimica' } </legend>
<input type="hidden" name="curso" id="curso" value="${materia}">
    <label>Data de ingresso <input type="date" name="dataInicio" id="dataInicio" value="2022-07-05" disabled></label>
    <p><span>Valor: </span><strong id="valorDoCurso">${materia === 'ads' ? valoresParcela.ads.valorParcelaText : materia === 'psic' ? valoresParcela.psic.valorParcelaText : valoresParcela.eq.valorParcelaText}</strong></p>
    <label for="">Quantidade de parcelas <select name="qtdParcelas" id="qtdParcelas">
        ${parcelamento()}
    </select></label>`