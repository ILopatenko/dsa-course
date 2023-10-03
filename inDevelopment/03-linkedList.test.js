const { LinkedList, Node } = require('../inDevelopment/03-linkedList');
const MainHelper = require('../helpers/mainHelper');
const JestHelper = require('../helpers/jestHelper');

describe(`1. MAIN TEST SUITE FOR LINKED LIST`, () => {
   const myHelper = new MainHelper();
   const jestHelper = new JestHelper();
   describe(`1.1. MAIN TEST SUITE FOR CLASSES`, () => {
      describe(`1.1.1. MAIN TEST SUITE FOR NODE CLASS`, () => {
         const testValue111 = myHelper.getRandomBetween(-100, 100);
         const testNode111 = new Node(testValue111);
         it(`1.1.1.1. CREATED OBJECT SHOULD BE AN INSTANCE OF NODE CLASS`, () => {
            expect(testNode111).toBeInstanceOf(Node);
         });
         it(`1.1.1.2. CREATED NODE SHOULD HAVE VALUE PARAMETER THAT EQUALS TO ${testValue111}`, () => {
            expect(testNode111.value).toBe(testValue111);
         });
         it(`1.1.1.3. CREATED NODE SHOULD HAVE NEXT PARAMETER THAT EQUALS TO NULL`, () => {
            expect(testNode111.next).toBeNull();
         });
      });
      describe(`1.1.2. MAIN TEST SUITE FOR LINKED LIST CLASS`, () => {
         const testValue112 = myHelper.getRandomBetween(-100, 100);
         const testLinkedList112 = new LinkedList(testValue112);
         jestHelper.checkLinkedListOfOneNode('1.1.2.', testLinkedList112, testValue112);
         it(`1.1.2.6. CREATED OBJECT SHOULD BE AN INSTANCE OF LINKED LIST CLASS`, () => {
            expect(testLinkedList112).toBeInstanceOf(LinkedList);
         });
      });
   });
});

//describe(``, () => {});
//it(``, () => {});
