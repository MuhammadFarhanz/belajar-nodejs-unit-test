import { sum } from "../src/sum"

beforeEach(() => {
    console.info("before each")
})

afterEach(() => {
    console.info("after each")
})

beforeAll(async () => {
    console.info("before all")
})

afterAll(async () => {
    console.info("after all")
})

test("first test", () => {
    expect(sum(10, 10)).toBe(20)
    console.info("first test")
})

test("test second", () => {
    expect(sum(20, 20)).toBe(40)
    console.info("second test")
})