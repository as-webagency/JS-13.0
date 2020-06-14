'use strict';

function outerBot() {
    let mysteriousNumber = Math.floor(Math.random() * 5 + 1);
    console.log("outerBot -> mysteriousNumber", mysteriousNumber)
    
    function innerBot() {
        let numberEntered = +prompt( 'Угадай число от 1 до 100', '' );

        if ( numberEntered == null || numberEntered == 'null' || numberEntered == '' ) {
            alert( 'Игра остановлена!' );
        } else {
            if ( numberEntered > mysteriousNumber ) {
                alert( 'Загаданное число меньше' );
                innerBot();
            } else if ( numberEntered < mysteriousNumber ) {
                alert( 'Загаданное число больше' );
                innerBot();
            } else if ( numberEntered === mysteriousNumber ) {
                alert( 'Поздравляю, Вы угадали!!!' );
                innerBot();
            } else if ( String( numberEntered ) ) {
                alert( 'Введи число!' );
                innerBot();
            } else {
                return;
            }
        }
        
    }
    innerBot();
}
outerBot();
