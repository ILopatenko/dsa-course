const { Node, LinkedList } = require('./01_01-jsdsa-code/03-linkedList');

const testLinkedList1 = new LinkedList(234);
testLinkedList1.deleteNodeFromHead().deleteNodeFromHead();

console.log(testLinkedList1);
