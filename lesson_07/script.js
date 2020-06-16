'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat( n )) && isFinite( n );
};

let money,
    start = function () {
        do {
            money = prompt( 'Ваш месячный доход? ', '' );
        } while (!isNumber( money ));
};

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt( 'Перечислите возможные расходы через запятую ', '' );
            appData.addExpenses = addExpenses.toLowerCase().split( ', ' );
            appData.deposit = confirm( 'Есть ли у вас депозит в банке? ' );
    
        for (let i = 0; i < 2; i++) {
            let expenses = prompt( 'Введите обязательную статью расходов? ', '' ),
                count;

            do {
                count += +prompt( 'Во сколько это обойдется? ', '' );
            } while (!isNumber( count ));

            appData.expenses[expenses] = count;
        }
    },
    // возвращает сумму всех обязательных расходов за месяц
    getExpensesMonth: function () {
        
    },
    // результат вызова функции getAccumulatedMonth
    getAccumulatedMonth: function () {
        return appData.money - appData.expensesAmount;
    },
    getTargetMonth: function () {
        //let target = appData.mission / appData.accumulatedMonth;
        let target = appData.mission / money;
        
        if ( target > 0 ) {
            console.log( "Цель будет достигнута: ", Math.floor( target ) );
        } else {
            console.log( "Цель не будет достигнута " );
        }

        return Math.floor( target );
    },
    getStatusIncome: function () {
        if ( appData.budgetDay >= 1200 ) {
            return ( 'У вас высокий уровень дохода' );
        } else if ( appData.budgetDay > 600 && appData.budgetDay < 1200 ) {
            return ( 'У вас средний уровень дохода' );
        } else if ( appData.budgetDay < 600 && appData.budgetDay > 0 ) {
            return ( 'К сожалению у вас уровень дохода ниже среднего' );
        } else if ( appData.budgetDay <= 0 || -appData.budgetDay ) {
            return ( 'Что то пошло не так' );
        }
        console.log("appData.budgetDay", typeof appData.budgetDay)
    }
};

appData.budgetDay = appData.getAccumulatedMonth() / 30;
appData.getTargetMonth();
appData.getStatusIncome();


let expensesAmount = appData.getExpensesMonth(),
    accumulatedMonth = appData.getAccumulatedMonth();
    
//console.log( "Месячный бюджет: ", budgetMonth);
console.log( "Бюджет на месяц: ", Math.ceil( appData.budgetDay ));
console.log( 'Период равен ' + appData.period + ' месяцев' );
console.log( 'Цель заработать ' + appData.mission + ' рублей/долларов/гривен/юани' );