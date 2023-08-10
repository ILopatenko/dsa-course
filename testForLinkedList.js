const { Node, LinkedList } = require('./01_01-jsdsa-code/03-linkedList');

const testLinkedList1 = new LinkedList(234);
testLinkedList1
   .deleteNodeFromTail()
   .deleteNodeFromTail()
   .addNodeToHead(111)
   .addNodeToHead(222)
   .deleteNodeFromTail()
   .deleteNodeFromTail()
   .deleteNodeFromTail();
console.log(testLinkedList1);
