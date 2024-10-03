interface IUser {
  name?: string;
  age?: number;
  skills?: string[];
}
const user: IUser = {
  name: "Vasiliy",
  age: 8,
  skills: ["typescript", "javascript"],
};

function pickObjectKeys<T, K extends keyof T>(obj: T, arr: K[]): T {
  const newArr = arr.reduce((result: any, value: keyof T) => {
    if (obj[value]) {
      result[value] = obj[value] as string | undefined;
      return result;
    }
  }, {});
  return newArr;
}
const res = pickObjectKeys(user, ["age", "skills"]);
console.log(res);
