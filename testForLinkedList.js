const { Node, LinkedList } = require('./01_01-jsdsa-code/03-linkedList');

const testLinkedList1 = new LinkedList(234);
testLinkedList1.addNodeToHead(111).addNodeToTail(333);

console.log(testLinkedList1.returnNodesValuesAsArrayHeadToTail());
