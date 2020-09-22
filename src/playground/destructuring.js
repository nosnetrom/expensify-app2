console.log('Hi');

const person = {
  name: 'JMT',
  age: 39,
  location: {
    city: 'Wylie',
    temp: 90,
  },
};

// ES6 object destructuring; a shorter, neater way; also, able to set default values
const { name = 'Anonymous', age } = person;
// renaming a local const for temp
const { city, temp: temperature } = person.location;

console.log(
  `${name} is ${age} years old in ${city}, where it is ${temperature} degrees.`
);

const book = {
  title: 'Moby Dick',
  author: 'Herman Melville',
  publish: {
    name: 'Scribner',
  },
};

const { title: bkTitle, author: bkAuthor } = book;
const { name: bkPublName = 'self-published' } = book.publish;

console.log(`${bkTitle} by ${bkAuthor} (publ. ${bkPublName})`);

// ARRAY DESTRUCTURING
const address = ['422', 'Bell Drive', 'Wylie', 'TX', '75098'];

const [, , locale, st = 'TX'] = address; // leaving blanks for unused array items

console.log(`Welcome to ${locale} ${st}`);

const menuItem = ['hot coffee', '$1.19', '$1.79', '$1.99'];
const [itemName, smPrice, mdPrice, lgPrice] = menuItem;
console.log(`A medium ${itemName} costs ${mdPrice}.`);
