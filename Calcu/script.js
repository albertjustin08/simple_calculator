let runningTotal = 0;
let buffer = '0';
let previousOperator = null;
let waitingForSecondNumber = false;

const mainScreen = document.querySelector('.main-screen');
const resultScreen = document.querySelector('.result-screen');

function buttonClick(value){
    value = value.trim(); // FIX: hilangkan spasi & newline pada innerText

    if (isNaN(value) && value !== '.') {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }

}

function handleSymbol(symbol){
    switch(symbol){
        case 'AC':
            buffer = '0';
            runningTotal = 0;
            previousOperator = null;
            mainScreen.innerText = '0';
            resultScreen.innerText = '= 0';
            break;

        case '=':
            if(previousOperator == null || waitingForSecondNumber){
                return; 
            } 

            const finalExpression = mainScreen.innerText;

            flushOperation(parseFloat(buffer));

            mainScreen.innerText = finalExpression;;

            resultScreen.innerText = '= ' + runningTotal;

            buffer = runningTotal.toString();
            runningTotal = 0;
            previousOperator = null;
            waitingForSecondNumber = false;
            break;

        case '←':
            if(buffer.length === 1) buffer = '0';
            else buffer = buffer.slice(0, -1);

            mainScreen.innerText = buffer;
            break;

        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(buffer === '0' && runningTotal !== 0){
        previousOperator = symbol;
        mainScreen.innerText = `${runningTotal} ${previousOperator}`;
        return;
    } 

    const intBuffer = parseFloat(buffer);

    if(runningTotal === 0){
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;
    // TAMPILKAN TOTAL DAN OPERATOR DI mainScreen
    mainScreen.innerText = `${runningTotal} ${previousOperator}`;

    buffer = runningTotal.toString();
    waitingForSecondNumber = true;

    resultScreen.innerText = `= ${runningTotal}`; // Tampilkan runningTotal di resultScreen

}

function flushOperation(intBuffer){
    switch(previousOperator){
        case '+':
            runningTotal += intBuffer;
            break;
        case '-':
            runningTotal -= intBuffer;
            break;
        case '×':
            runningTotal *= intBuffer;
            break;
        case '÷':
            runningTotal /= intBuffer;
            break;
    }
}

function handleNumber(num){
    if(waitingForSecondNumber){
        buffer = num;
        waitingForSecondNumber = false;
    } else if(num === '.'){
        if(!buffer.includes('.')){ // Hanya tambahkan titik jika belum ada
            buffer += num;
        }
    } else if(buffer === "0"){
        buffer = num;
    } else {
        buffer += num;
    }

    if(previousOperator !== null && !waitingForSecondNumber){
            mainScreen.innerText = `${runningTotal} ${previousOperator} ${buffer}`;
    }
    else{
        mainScreen.innerText = buffer;
    }

    resultScreen.innerText = '= 0';
}

function init(){
    document.querySelector('.calc-buttons')
        .addEventListener('click', (event) => {
            if(event.target.classList.contains('calc-button')){
                buttonClick(event.target.innerText);
            }
        });
}

init();
