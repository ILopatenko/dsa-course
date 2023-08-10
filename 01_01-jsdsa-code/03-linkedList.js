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

   addToHead(value) {
      const newNode = new Node(value);
      if (!this.head || !this.tail || this.length === 0) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         newNode.next = this.head;
         this.head = newNode;
      }
      this.length++;
      return this;
   }

   removefromHead(value) {
      if (!this.head || !this.tail || this.length === 0) return undefined;
      const temp = this.head;
      temp.next = null;
      if (this.length === 1) {
         this.head = null;
         this.tail = null;
      }
      this.head = this.head.next;
      this.length--;
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
