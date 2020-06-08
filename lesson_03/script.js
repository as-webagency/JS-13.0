'use strict';

let money = +prompt( 'Ваш месячный доход? ', '' ), // Доход за месяц
    income = prompt( 'Дополнительный доход ', '' ), // строка с дополнительными доходом (например: фриланс)
    addExpenses = prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую ', '' ), // перечисляем дополнительный расход 
    deposit = confirm( 'Есть ли у вас депозит в банке? ' ), // булево значение true/false
    mission = +prompt( 'Какую сумму хотите накопить? ', '' ), // любое число (Какую сумму хотите накопить)
    period = +prompt( 'Период (от 1 до 12 месяцев) ', '' ), // число от 1 до 12 (месяцев)
    expenses1 = prompt( 'Введите обязательную статью расходов? ', '' ),
    amount1 = +prompt( 'Во сколько это обойдется? ', '' ),
    expenses2 = prompt( 'Введите обязательную статью расходов? ', '' ),
    amount2 = +prompt( 'Во сколько это обойдется? ', '' ),
    budgetMonth = money - amount1 - amount2,
    target = mission / budgetMonth,
    budgetDay = budgetMonth / 30;
    
    if (addExpenses) {
        addExpenses.toLowerCase().split( ', ' );
    }
    
    if ( budgetDay >= 1200 ) {
        console.log( 'У вас высокий уровень дохода' );
    } else if ( budgetDay > 600 && budgetDay < 1200 ) {
        console.log( 'У вас средний уровень дохода' );
    } else if ( budgetDay < 600 && budgetDay > 0 ) {
        console.log( 'К сожалению у вас уровень дохода ниже среднего' );
    } else if ( budgetDay <= 0 || -budgetDay ) {
        console.log( 'Что то пошло не так' );
    }
    

    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);
    
    console.log( "Месячный бюджет: ", budgetMonth);
    console.log( "За сколько месяцев будет достигнута цель: ", Math.floor(target));
    console.log( "Бюджет на месяц: ", Math.ceil(budgetDay));
    
    if (addExpenses) {
        console.log( 'Длинна строки: ', addExpenses.length);
    }
    
    console.log( 'Период равен ' + period + ' месяцев' );
    console.log( 'Цель заработать ' + mission + ' рублей/долларов/гривен/юани' );