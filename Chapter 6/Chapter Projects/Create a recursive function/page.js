function countToTen(startNum) {
    if (startNum <= 10) {
      console.log(startNum);
      countToTen(startNum + 1); // Recursive call with incremented number
    }
  }
  
  // Invoke the function with different start numbers
  countToTen(7); // Start counting from 7
  countToTen(9); // Start counting from 9
  