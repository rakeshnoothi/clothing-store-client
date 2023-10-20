async function foo() {
    const result1 = await new Promise(resolve =>
        setTimeout(() => resolve(console.log("result1")), 3000)
    );
    const result2 = await new Promise(resolve =>
        setTimeout(() => resolve(console.log("result2")), 1000)
    );
}
foo();
