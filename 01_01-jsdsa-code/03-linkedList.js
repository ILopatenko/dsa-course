class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class LinkedList {
   constructor(value) {
      const firstNode = new Node(value);
      this.head = firstNode;
      this.tail = firstNode;
      this.length = 1;
      return this;
   }

   dropLinkedList() {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
   }

   deleteLastNodeOrNodeFromEmptyLinkedList() {
      if (this.head || this.tail || this.length <= 1) return this.dropLinkedList();
   }

   addFirstNode(value) {
      const newNode = new Node(value);
      if (!this.head || !this.tail || this.length <= 0) {
         this.head = newNode;
         this.tail = newNode;
         this.length = 1;
      }
      return this;
   }

   addNodeToHead(value) {
      if (this.length <= 0) return this.addFirstNode(value);
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
   }

   deleteNodeFromHead() {
      if (this.length <= 1 || !this.head || !this.tail)
         return this.deleteLastNodeOrNodeFromEmptyLinkedList();
      const temp = this.head;
      temp.next = null;
      this.head = this.head.next;
      this.length--;
      return this;
   }
}

module.exports = { Node, LinkedList };
