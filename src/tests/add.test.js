const add = (a, b) => a + b;

const generateGreeting = (n) => `Howdy ${n}!`;

test('Should add two numbers', () => {
  const result = add(3, 4);

  if (result !== 7) {
    throw new Error(`Adding 3 and 4 should equal 7; you got ${result}.`);
    expect(result).toBe(7);
  }
});

test('Should say howdy', () => {
  const resultGreeting = generateGreeting('JMT');

  if (resultGreeting !== 'Howdy JMT!') {
    // throwing an error is optional; helps in debugging
    throw new Error(
      `You should have said "Howdy JMT!", but you instead said "${resultGreeting}".`
    );
    expect(resultGreeting).toBe(`Howdy JMT!`);
  }
});
