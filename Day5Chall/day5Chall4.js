let text = "hello";

let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
    reversed+=text[i];
}

console.log(reversed);