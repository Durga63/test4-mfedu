function isElementPresent(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

const array = [1, 2, 3, 4, 5];
const element = 3;

if (isElementPresent(array, element)) {
    console.log(${ element } is present in the array.);
} else {
    console.log(${ element } is not present in the array.);
}