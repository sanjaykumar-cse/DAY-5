for (let j = 2; j < i; j++) {
    if (i % j == 0) {
        flag = 1;
        break;
    }
}

// if number greater than 1 and not divisible by other numbers
if (i > 1 && flag == 0) {
    console.log(i);
}
