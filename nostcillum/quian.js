function arraysMatch(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

// Example usage:
let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 3, 4];
console.log(arraysMatch(array1, array2)); // true

array1 = [1, 2, 3, 4];
array2 = [4, 3, 2, 1];
console.log(arraysMatch(array1, array2)); // false

array1 = [1, 2, 2, 3];
array2 = [1, 2, 3, 3];
console.log(arraysMatch(array1, array2)); // false
