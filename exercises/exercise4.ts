
// generic map

class MyMap<T> {
    private map: {[key: string]: T} = {};

    public getItem(key: string): T {
        return this.map[key];
    };

    public setItem(key: string, item: T): void {
        this.map[key] = item;
    };

    public clear() {
        this.map = {}
    };

    public printMap(): void {
        console.log(this.map);
    };
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();