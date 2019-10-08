const add = (a, b) => a + b;
const generateGreeting = (name = 'anonymous') => `Hi ${name}`

test('should add two numbers', () => {
    const result = add(3, 4);

    // if (result !== 7) {
    //     throw new Error(`You added 4 and 3. your result is ${result}. Expect 7.`)
    // }
    expect(result).toBe(7);
});

test('generate Greeting', () => {
    const result = generateGreeting('reza');
    expect(result).toBe('Hi reza');
});

test('generate Greeting', () => {
    const result = generateGreeting();
    expect(result).toBe('Hi anonymous');
});