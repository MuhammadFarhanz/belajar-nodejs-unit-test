import { callMe, myException } from "../src/exception"

test("exception", () => {
    expect(() => callMe("farhan")).toThrow()
    expect(() => callMe().toThrow(myException))
})