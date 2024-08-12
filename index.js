const LinkedList = require('./linkedList');
const Item = require('./item');

const list = new LinkedList();
list.append(new Item('Apple', 1.0));
list.append(new Item('Banana', 0.5));
list.append(new Item('Orange', 1.2));

list.printList();
