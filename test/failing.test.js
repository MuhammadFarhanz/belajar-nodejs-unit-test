import { sayHello } from "../src/sayHello"

test("say Hello Success", () => {
    expect(sayHello("Farhan")).toBe("Hello Farhan")
})

test.failing("say Hello Failed", () => {
    expect(sayHello(null))
})