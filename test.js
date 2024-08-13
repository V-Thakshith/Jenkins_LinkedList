const assert = require('assert');
const LinkedList = require('./linkedList');
const Item = require('./item');

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

    it('should delete an item correctly', () => {
        const list = new LinkedList();
        list.append(new Item('Apple', 1.0));
        list.append(new Item('Banana', 0.5));
        list.append(new Item('Cherry', 2.0));

        assert.strictEqual(list.delete('Banana'), true);
        assert.strictEqual(list.search('Banana'), null);

        assert.strictEqual(list.delete('Apple'), true);
        assert.strictEqual(list.search('Apple'), null);

        assert.strictEqual(list.delete('Cherry'), true);
        assert.strictEqual(list.search('Cherry'), null);

        assert.strictEqual(list.delete('Nonexistent'), false);
    });

    it('should search for an item correctly', () => {
        const list = new LinkedList();
        list.append(new Item('Apple', 1.0));
        list.append(new Item('Banana', 0.5));

        const apple = list.search('Apple');
        assert.strictEqual(apple.itemName, 'Apple');
        assert.strictEqual(apple.price, 1.0);

        const banana = list.search('Banana');
        assert.strictEqual(banana.itemName, 'Banana');
        assert.strictEqual(banana.price, 0.5);

        const nonexistent = list.search('Nonexistent');
        assert.strictEqual(nonexistent, null);
    });

    it('should handle an empty list', () => {
        const list = new LinkedList();
        
        assert.strictEqual(list.delete('Apple'), false);
        assert.strictEqual(list.search('Apple'), null);
    });
});
