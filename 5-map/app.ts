class MyMap {
  buckets: any[];
  constructor() {
    this.buckets = Array(32).fill(null);
  }
  hash(key: string): number {
    const hash = Array.from(key).reduce((acc, value) => {
      return (acc += value.charCodeAt(0));
    }, 0);
    return hash % 32;
  }

  add(key: unknown, value: any): void {
    if (typeof key === "string") {
      const keyMap = this.hash(key);
      if (this.buckets[keyMap] === null) {
        this.buckets[keyMap] = [{ [key]: value }];
      } else {
        let node = this.buckets[keyMap].find((param: object) => {
          return Object.keys(param).includes(key);
        });
        if (node) {
          node[key] = value;
        } else {
          this.buckets[keyMap].push({ [key]: value });
        }
      }
    } else {
      throw new Error("Number not can key");
    }
  }
  delete(key: unknown) {
    if (typeof key === "string") {
      const keyMap = this.hash(key);
      let node = this.buckets[keyMap].findIndex((param: object) => {
        return Object.keys(param).includes(key);
      });
      if (node === -1) {
        console.log("данного элемента нет");
      } else {
        this.buckets[keyMap].splice(node);
      }
    }
  }
  get(key: unknown) {
    if (typeof key === "string") {
      const keyMap = this.hash(key);
      let node = this.buckets[keyMap].find((param: object) => {
        return Object.keys(param).includes(String(key));
      });
      console.log(node);
    }
  }
  clear() {
    this.buckets = Array(32).fill(null);
  }
}

const test = new MyMap();
test.add("a", "a");
test.add("1", true);
test.add("2", 1);
test.add("3", null);
test.add("4", undefined);

console.log(test.buckets);
