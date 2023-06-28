// imports "./shape.js"
import Shape from "./shape.js";

// default class for circle
export default class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}
