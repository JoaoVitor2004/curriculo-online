console.log('Teste');


const texto = 'JOÃO VITOR DE SOUZA'
const tempo = 300
const elemento = document.querySelector('#nome')

function digitarTexto() {
    const caracteres = texto.split('')
    console.log(caracteres)
    
    const intervalo = setInterval(() => {
        if (!caracteres.length) {
            return clearInterval(intervalo)
        }
        const imprimirTexto = caracteres.shift()
        elemento.innerHTML += imprimirTexto
    }, tempo)
}
digitarTexto()