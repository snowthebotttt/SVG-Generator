// Shape class with a constructor that sets the color property
class Shape {
  constructor(color) {
    this.color = color;
  }
}
// Circle class that extends Shape and has a render method that returns an SVG string with a circle and text element
class Circle extends Shape {
  render(text, textColor) {
    return `<svg width="300" height="200">
          <circle cx="150" cy="100" r="80" fill="${this.color}" />
          <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
  }
}
// Triangle class that extends Shape and has a render method that returns an SVG string with a polygon and text element
class Triangle extends Shape {
  render(text, textColor) {
    return `<svg width="300" height="200">
          <polygon points="150,20 260,180 40,180" fill="${this.color}" />
          <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
  }
}
// Square class that extends Shape and has a render method that returns an SVG string with a rectangle and text element
class Square extends Shape {
  render(text, textColor) {
    return `<svg width="300" height="200">
          <rect x="30" y="30" width="240" height="140" fill="${this.color}" />
          <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
  }
}
// Export the Shape, Circle, Triangle, and Square classes as a module
module.exports = { Shape, Circle, Triangle, Square };
