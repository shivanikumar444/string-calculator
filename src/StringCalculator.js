// StringCalculator.js
export const add = (numbers) => {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n", 2);
      delimiter = new RegExp(parts[0].slice(2));
      numbers = parts[1];
    }
  
    const numberList = numbers.split(delimiter);
    let sum = 0;
    const negatives = [];
  
    for (let number of numberList) {
      if (number) {
        const num = parseInt(number, 10);
        if (num < 0) negatives.push(num);
        sum += num;
      }
    }
  
    if (negatives.length) {
      throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
    }
  
    return sum;
  };
  