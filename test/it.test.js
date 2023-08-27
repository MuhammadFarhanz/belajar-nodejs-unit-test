import { sumAll } from "../src/sum"

describe("when call sumAll()", () => {
    it("should return 30 with parameter [10,10,10]", () => {
        expect(sumAll([10,10,10])).toBe(30)
    })

    it("should return 50 with parameter [10,10,10, 10, 10]", () => {
        expect(sumAll([10,10,10,10,10])).toBe(50)
    })
})