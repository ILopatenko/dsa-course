class Cookie {
   constructor(color) {
      this.color = color;
   }
}

const cookie1 = new Cookie('red');
const cookie2 = new Cookie('blue');

console.log('Cookie #1 is ', cookie1);
console.log('Cookie #2 is ', cookie2);
console.log(`Cookie #2 has ${cookie2.color} color!`);

class CookieAdvanced {
   constructor(color) {
      this.color = color;
   }

   getColor() {
      return this.color;
   }

   setColor(newColor) {
      return (this.color = newColor);
   }
}

const cookie1a = new CookieAdvanced('red');
const cookie2a = new CookieAdvanced('blue');

console.log('CookieAdvanced #1 is ', cookie1a);
console.log('CookieAdvanced #2 is ', cookie2a);
console.log(`CookieAdvanced #2 has ${cookie2.color} color!`);

console.log(cookie1a.getColor());
cookie1a.setColor('cyan');
console.log('CookieAdvanced #1 is ', cookie1a);
console.log('CookieAdvanced #2 is ', cookie2a);

console.clear();
let object1 = { value: 555 };
let object2 = object1;
console.log('\n   Object 1 is: ', object1);
console.log('   Object 2 is: ', object2);

object1.value = 10;
console.log('\n   Object 1 is: ', object1);
console.log('   Object 2 is: ', object2);
