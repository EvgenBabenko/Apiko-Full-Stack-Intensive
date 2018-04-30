/*
Задача 3 - Сортування стрічки (складність 3/5)

Завдання: Написати функцію яка сортує стрічку. Кожне число в стрічці буде містити якусь цифру.
Ця цифра і буде означати позицію яку слово займе в результаті.

Уточнення: Цифри можуть бути від 1 до 9. 1 буде першим словом (не 0).
Якщо стрічка пуста - повернути пусту стрічку. Слова в вхідній стрічці будуть містити тільки валідні значення.

Тести:

sortString(‘g5et ski3lls on6 use1 your2 to4 7top’)
Результат: ‘use1 your2 ski3lls to4 g5et on6 7top’

sortString(‘’)
Результат: ‘’

sortString(‘practic3 h4rder yo1u 2hould’)
Результат: ‘yo1u 2hould practic3 h4rder’
*/

function sortString(string) {
    const arr = string.split(' ');

    arr.sort((a, b) => {
        const regExp = /\d+/;

        a = parseInt(a.match(regExp));
        b = parseInt(b.match(regExp));

        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })

    return arr.join(' ')
}

sortString('g5et ski3lls on6 use1 your2 to4 7top');
sortString('')
sortString('practic3 h4rder yo1u 2hould')