class JestHelper {
   checkPointerValue(testNumber, object, parameter, subParameter, value) {
      it(`${testNumber} CREATED LINKED LIST SHOULD HAVE ${parameter.toUpperCase()} PARAMETER EQUALS TO ${value} (${parameter.toUpperCase()}.${subParameter.toUpperCase()} === ${value})`, () => {
         expect(object[parameter][subParameter]).toBe(value);
      });
   }

   checkPointerIsLast(testNumber, object, parameter, subParameter) {
      it(`${testNumber} CREATED LINKED LIST SHOULD HAVE ${parameter.toUpperCase()}.NEXT PARAMETER THAT POINTS TO NULL (${parameter.toUpperCase()}.${subParameter.toUpperCase()} === NULL)`, () => {
         expect(object[parameter][subParameter]).toBeNull();
      });
   }

   checkHeadValue(testNumber, object, value) {
      this.checkPointerValue(testNumber, object, 'head', 'value', value);
   }

   checkTailValue(testNumber, object, value) {
      this.checkPointerValue(testNumber, object, 'tail', 'value', value);
   }

   chechHeadNextNULL(testNumber, object) {
      this.checkPointerIsLast(testNumber, object, 'head', 'next');
   }

   chechTailNextNULL(testNumber, object) {
      this.checkPointerIsLast(testNumber, object, 'tail', 'next');
   }

   checkLength(testNumber, object, value) {
      it(`${testNumber} CREATED LINKED LIST SHOULD HAVE LENGTH PARAMETER EQUALS TO ${value} (LENGTH === ${value})`, () => {
         expect(object.length).toBe(value);
      });
   }

   checkLinkedListOfOneNode(testNumber, object, value) {
      const number1 = `${testNumber}1.`;
      const number2 = `${testNumber}2.`;
      const number3 = `${testNumber}3.`;
      const number4 = `${testNumber}4.`;
      const number5 = `${testNumber}5.`;
      this.checkLength(number1, object, 1);
      this.checkHeadValue(number2, object, value);
      this.checkTailValue(number3, object, value);
      this.chechHeadNextNULL(number4, object, value);
      this.chechTailNextNULL(number5, object, value);
   }
}

module.exports = JestHelper;

/* it(`1.1.2.2. CREATED LINKED LIST SHOULD HAVE HEAD PARAMETER THAT EQUALS TO ${testValue112}`, () => {
   expect(testLinkedList112.head.value).toBe(testValue112);
});
 */
