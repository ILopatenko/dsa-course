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

   //HELPERS FOR MAIN METHODS

   isLinkedListEmpty() {
      return !this.head || !this.tail || this.length <= 0 ? true : false;
   }

   isLinkedListEmptyOrHasOneNode() {
      return this.isLinkedListEmpty() || this.length === 1 ? true : false;
   }

   dropLinkedList() {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
   }

   deleteLastNodeOrNodeFromEmptyLinkedList() {
      return this.dropLinkedList();
   }

   addFirstNode(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return this;
   }

   //MAIN METHODS

   addNodeToHead(value) {
      if (this.isLinkedListEmpty()) return this.addFirstNode(value);
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
   }

   deleteNodeFromHead() {
      if (this.isLinkedListEmptyOrHasOneNode())
         return this.deleteLastNodeOrNodeFromEmptyLinkedList();
      const temp = this.head;
      temp.next = null;
      this.head = this.head.next;
      this.length--;
      return this;
   }

   addNodeToTail(value) {
      if (this.isLinkedListEmpty()) return this.addFirstNode(value);
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
   }

   deleteNodeFromTail() {
      if (this.isLinkedListEmptyOrHasOneNode())
         return this.deleteLastNodeOrNodeFromEmptyLinkedList();
      let prev = this.head;
      let current = prev;
      while (current.next) {
         prev = current;
         current = current.next;
      }
      this.tail = prev;
      this.tail.next = null;
      this.length--;
      return this;
   }

   //ADDITIONAL HELPERS
   returnNodesValuesAsArrayHeadToTail() {
      const result = [];
      let current = this.head;
      while (current) {
         result.push(current.value);
         current = current.next;
      }
      return result;
   }

   addNodesFromArrayToHead(array) {
      for (let i = array.length - 1; i >= 0; i--) {
         this.addNodeToHead(array[i]);
      }
      return this;
   }

   addNodesFromArrayToTail(array) {
      array.forEach(el => this.addNodeToTail(el));
      return this;
   }
}

module.exports = LinkedList;
