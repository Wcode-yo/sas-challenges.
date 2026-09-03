const isEmpty = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            return false;
        }
    }

    return true;
};

console.log(isEmpty("   "));
