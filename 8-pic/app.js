"use strict";
const user = {
    name: "Vasiliy",
    age: 8,
    skills: ["typescript", "javascript"],
};
function pickObjectKeys(obj, arr) {
    const newArr = arr.reduce((result, value) => {
        if (obj[value]) {
            result[value] = obj[value];
            return result;
        }
    }, {});
    return newArr;
}
const res = pickObjectKeys(user, ["age", "skills"]);
console.log(res);
