"use strict";
// generic map
class MyMap {
    constructor() {
        this.map = {};
    }
    getItem(key) {
        return this.map[key];
    }
    ;
    setItem(key, item) {
        this.map[key] = item;
    }
    ;
    clear() {
        this.map = {};
    }
    ;
    printMap() {
        console.log(this.map);
    }
    ;
}
const numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
const stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
