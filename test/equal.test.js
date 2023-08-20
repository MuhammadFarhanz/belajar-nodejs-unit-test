test("test toBe", () => {
    const name = "Farhan"
    const hello = `Hello ${name}`

    expect(hello).toBe("Hello Farhan")
})

test("test toEqual", () => {
    const person = {id: 'farhan'}
    Object.assign(person, {name: 'Farhan'})

    expect(person).toEqual({id: 'farhan', name: 'Farhan'})
})