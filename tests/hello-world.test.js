const HelloWorld = require('../src/HelloWorld');

it('Outputs the string', () => {
    expect(HelloWorld.greet()).toBe('Hello, World!');
});
