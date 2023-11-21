function fn(arr, line) {
  const obj = {};
  for (let i = 1; i <= line; i += 1) {
    obj[i] = 0;
  }
    arr.forEach(buyer => {
        const values = Object.values(obj)
        const minValue = Math.min(...values)
        const currentLine = value.indexOf(minValue) + 1
        obj[currentLine] += buyer
    })
    return obj
}

console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));
