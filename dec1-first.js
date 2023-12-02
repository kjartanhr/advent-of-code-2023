const fs = require('fs');
const path = require("path");

const data = fs.readFileSync(path.join(__dirname, 'dec1.input'), {encoding: 'utf8'});

let total = 0;

for (const line of data.split('\n')) {
    const nums = line.match(/\d/g);

    if (nums.length === 0) {
        return;
    }

    total += Number(`${nums[0]}${nums[nums.length - 1]}`);
}

console.log(total);