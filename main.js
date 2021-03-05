let array = ([10, 1, 4, 2]);

logParityInfo(array)

function logParityInfo(array) {
    for (let i = 0; i < array.length; i++) {
        let tempNumber = array[i];
        if (isEven(tempNumber)) {
            console.log(tempNumber + " - even")
        } else {
            console.log(tempNumber + " - odd")
        }
    }
}

function isEven(number) {
    let isEven;
    if (number % 2 === 0) {
        isEven = true;
    } else {
        isEven = false;
    }
    return isEven;
}