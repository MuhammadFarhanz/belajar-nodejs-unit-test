test("string", () => {
    const name = 'Muhammad Farhan'

    expect(name).toBe('Muhammad Farhan')
    expect(name).toMatch(/ammad/)
})