test("string.not", () => {
    const name = "Muhammad Farhan"

    expect(name).not.toBe("budi")
    expect(name).not.toEqual("budi")
    expect(name).not.toMatch(/budi/)
})

test("number.not", () => {
    const value = 1 + 3

    expect(value).not.toBeGreaterThan(5)
    expect(value).not.toBeLessThan(4)
    expect(value).not.toBe(8)
})