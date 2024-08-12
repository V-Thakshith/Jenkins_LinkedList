const LinkedList = require('./linkedList');
const Item = require('./item');
const assert = require('assert');

describe('LinkedList Tests', () => {
    it('should append items correctly', () => {
        const list = new LinkedList();
        list.append(new Item('Apple', 1.0));
        list.append(new Item('Banana', 0.5));

        let items = [];
        let current = list.head;
        while (current) {
            items.push(current.item);
            current = current.next;
        }

        assert.strictEqual(items[0].itemName, 'Apple');
        assert.strictEqual(items[0].price, 1.0);
        assert.strictEqual(items[1].itemName, 'Banana');
        assert.strictEqual(items[1].price, 0.5);
    });
});
