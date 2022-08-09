const operacion = () => {
    const primerValor = parseInt(document.getElementById( 'Pvalor' ).value);
    const segundoValor = parseInt(document.getElementById( 'Svalor' ).value);
    const calculadora = document.getElementById( 'calculadora' ).value;

    switch (calculadora) {
        case 'na' :
            document.getElementById('resultado').innerHTML = 'No puso una operacion';
            break;
        case '+' :
            document.getElementById('resultado').innerHTML = primerValor + segundoValor;
            break;
        case '-':
            document.getElementById('resultado').innerHTML = primerValor - segundoValor;
            break;
        case '*':
            document.getElementById('resultado').innerHTML = primerValor * segundoValor;
            break;
        case '/':
            document.getElementById('resultado').innerHTML = primerValor / segundoValor;
            break;
    }

}

