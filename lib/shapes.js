// Define Shape base class
class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

// Define Circle class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Define Triangle class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Define Square class
class Square extends Shape {
    render() {
        return `<rect x="75" y="50" width="150" height="150" fill="${this.color}" />`;
    }
}

// Ensure these classes are exported
export { Circle, Triangle, Square }; 
