const LinkedList = require('./01_01-jsdsa-code/03-linkedList');

const testLinkedList1 = new LinkedList(234);
testLinkedList1
   .deleteNodeFromTail()
   .addNodesFromArrayToHead([1, 3, 4, 5, 8])
   .addNodesFromArrayToHead([88, 99, 101, 103])
   .addNodesFromArrayToTail([666, 444, 555, 999]);

console.log(testLinkedList1.returnNodesValuesAsArrayHeadToTail());
