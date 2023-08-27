import { sayHelloAsync } from "../src/async"

test.concurrent("concurrent 1", async () => {
    await expect(sayHelloAsync("Farhan")).resolves.toBe("Hello Farhan")
},10000)

test.concurrent("concurrent 2", async () => {
    await expect(sayHelloAsync("Farhan")).resolves.toBe("Hello Farhan")
})

test.concurrent("concurrent 3", async () => {
    await expect(sayHelloAsync("Farhan")).resolves.toBe("Hello Farhan")
})