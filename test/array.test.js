test("simple array", () => {
    const names = ['Muhammad', "Farhan", "Keren"]

    expect(names).toEqual(["Muhammad", "Farhan", "Keren"])
    expect(names).toContain("Keren")
})

test("array object", () => {
    const person = [{name: "farhan"}, {name:"budi"}]
// 
    expect(person).toContainEqual({name:'farhan'})
})