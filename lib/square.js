// imports "./shape.js"
import Shape from "./shape.js";

// default class for square
export default class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}
