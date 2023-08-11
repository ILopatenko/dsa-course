const LinkedList = require('./01_01-jsdsa-code/03-linkedList');

const testLinkedList1 = new LinkedList(234);
testLinkedList1
   .deleteNodeFromTail()
   .deleteNodeFromTail()
   .deleteNodeFromHead()
   .addNodeToTail(111)
   .addNodeToTail(222)
   .deleteNodeFromTail()
   .deleteNodeFromHead();

console.log(testLinkedList1.returnNodesValuesAsArrayHeadToTail());
