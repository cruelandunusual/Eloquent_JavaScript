

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        /* Returns the number of nodes in the list. */
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        /* Empties out the list. */
        this.head = null;
    }

    getLast() {
        /* Returns the last node of the linked list. */
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getFirst() {
        /* Returns the first node of the linked list. */
        return this.head;
    }
}

///////////////////////////////////////////////////////////////////////////////////////

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);

console.log(list.head.next.data);
console.log(list.size());
console.log(list.getFirst());
console.log(list.getLast());
console.log(list.clear());
