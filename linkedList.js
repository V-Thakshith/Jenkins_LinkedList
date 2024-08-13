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

    // Delete an item by name
    delete(itemName) {
        if (!this.head) return false;

        if (this.head.item.itemName === itemName) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next && current.next.item.itemName !== itemName) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            return true;
        }

        return false;
    }

    // Search for an item by name
    search(itemName) {
        let current = this.head;
        while (current) {
            if (current.item.itemName === itemName) {
                return current.item;
            }
            current = current.next;
        }
        return null;
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
