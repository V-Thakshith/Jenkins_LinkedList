const Item = require('./item');

// Node class for linked list
class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

// LinkedList class definition
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add an item to the end of the list
    append(item) {
        const newNode = new Node(item);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Print the linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(`Item Name: ${current.item.itemName}, Price: ${current.item.price}`);
            current = current.next;
        }
    }
}

module.exports = LinkedList;
