import { sayHelloAsync } from "../src/async"

test("async test", async () => {
    const result = await sayHelloAsync("farhan")

    expect(result).toBe("Hello farhan")
})

test("test async macthers", async () => {
    await expect(sayHelloAsync("Farhan")).resolves.toBe("Hello Farhan")
    await expect(sayHelloAsync()).rejects.toBe("Name is empty")
})