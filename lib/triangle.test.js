// imports './triangle.js
import Triangle from "./triangle.js"

// creates test for triangle; ran by jest
describe("triangle", () => {
    test("creates red triangle", () => {
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`
        const shape = new Triangle();
        shape.setColor("red")
        const tester = shape.render()
        expect(tester).toEqual(expected)
    })
})