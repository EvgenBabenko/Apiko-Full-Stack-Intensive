/*
Задача 1 - Кількість співпадінь (складність 2/5)

Завдання: написати функцію яка буде знаходити кількість співпадінь певного елементу в масиві

Приклади:
var arr = [0, 2, 3, 3, 3, 4, 5, 6, 6)
arr.occurencesCount(0) // 1
arr.occurencesCount(2) // 1
arr.occurencesCount(3) // 3
arr.occurencesCount(4) // 1
arr.occurencesCount(5) // 1
arr.occurencesCount(6) // 2

Підказка: Якщо є труднощі з цим завданням - підгляньте розділ Javascript Prototypes
*/

Array.prototype.occurencesCount = function(value) {
    
    return this.reduce((result, item) => {
        if (item === value) {
            return result + 1;
        } else {
            return result;
        }
    }, 0)
    
}

var arr = [0, 2, 3, 3, 3, 4, 5, 6, 6];

arr.occurencesCount(6)