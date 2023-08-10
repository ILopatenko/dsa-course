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

   addToTail(value) {
      const newNode = new Node(value);
      if (!this.head || !this.tail || this.length === 0) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this.length++;
      return this;
   }
}

module.exports = { Node, LinkedList };
