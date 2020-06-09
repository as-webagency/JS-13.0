'use strict';

let myStr = prompt( 'Введите что-то: ', '' );
function oneArguments( myArgyment ) {

    if ( myArgyment ) {
        myArgyment = myArgyment.trim();
    }

    if ( myStr == Number( myArgyment )) {
        console.log( 'Передана не строка :(' );
    } else {
        console.log( 'Передана строка :)' );
        if ( myArgyment.length > 30 ) {
            myArgyment = myArgyment.slice(0, 30) + '...';
            return myArgyment;
        } else {
            return myArgyment;
        }
    }
}
console.log( oneArguments( myStr ) );