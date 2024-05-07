const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
    test('Circle renders with correct color', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    test('Triangle renders with correct color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    test('Square renders with correct color', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toEqual('<rect x="75" y="50" width="150" height="150" fill="green" />');
    });
});
