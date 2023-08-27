import { callMe, myException } from "../src/exception"

test("exception", () => {
    expect(() => callMe("Farhan")).toThrow()
    expect(() => callMe().toThrow(myException))
    expect(() => callMe("Farhan")).toThrow("Ups my exceptions happen")
})

test("exception not happens", () => {
    expect(callMe("Budi")).toBe("OK")
})