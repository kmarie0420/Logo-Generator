// imports "./square.js"
import Square from "./square.js"

// creates test for square; ran by jest
describe("square", () => {
    test("creates purple square", () => {
        const expected = `<rect x="90" y="40" width="120" height="120" fill="purple" />`
        const shape = new Square();
        shape.setColor("purple")
        const tester = shape.render()
        expect(tester).toEqual(expected)
    })
})