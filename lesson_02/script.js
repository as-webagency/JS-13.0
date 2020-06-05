'use strict';

let money = +prompt( 'Доход за месяц: ', '' ), // любое число “Доход за месяц”
    income = prompt( 'Дополнительный доход', '' ), // строка с дополнительными доходом (например: фриланс)
    addExpenses = prompt( 'Перечислите дополнительные расходыё', '' ), // строка с перечислением дополнительных расходов через запятую
    deposit = true, // любое булево значение
    mission = +prompt( 'Какую сумму хотите накопить? ', '' ), // любое число (Какую сумму хотите накопить)
    period = 8, // число от 1 до 12 (месяцев)
    budgetDay = money / 30; // дневной бюджет
    
    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);
    
    console.log( 'Длинна строки: ', addExpenses.length);
    console.log( 'Период равен ' + period + ' месяцев' );
    console.log( 'Цель заработать ' + mission + ' рублей/долларов/гривен/юани' );
    
    addExpenses.toLowerCase().split( ', ' );
    console.log("addExpenses: ", addExpenses);
    
    console.log("Дневной бюджет: ", budgetDay);
    