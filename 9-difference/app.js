"use strict";
let a = { a: 5, b: "" };
let b = { a: 10, c: true };
// let v0: IDifference = difference(a, b);
function removeKeys(obj1, obj2) {
    let result = {};
    for (let key in obj1) {
        if (!(key in obj2)) {
            // result[key as keyof IDifference] = obj1[key];
            result[key] = obj1[key];
        }
    }
    return result;
}
// let a: IA = { a: 5, b: '' };
// let b: IB = { a: 10, c: true };
let difference = removeKeys(a, b);
console.log(difference); // Вывод: { b: '' }
