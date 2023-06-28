// imports "./shape.js"
import Shape from "./shape.js";

// default class for triangle
export default class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}
