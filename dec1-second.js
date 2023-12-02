const fs = require('fs');
const path = require("path");

const data = fs.readFileSync(path.join(__dirname, 'dec1.input'), {encoding: 'utf8'});
const numMap = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
};

let total = 0;

for (const line of data.split('\n')) {
    const nums = line.match(/\d|one|two|three|four|five|six|seven|eight|nine/g);

    if (nums.length === 0) {
        return;
    }

    const first = nums[0];
    const last = nums[nums.length - 1];

    total += Number(`${numMap[first]}${numMap[last]}`);
}

console.log(total);