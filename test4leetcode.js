function createCounter(n) {
    let count = n;

    function counter() {
        return count++;
    }

    return counter;
}
const counterFunc = createCounter();
console.log(counterFunc());
console.log(counterFunc());
console.log(counterFunc());