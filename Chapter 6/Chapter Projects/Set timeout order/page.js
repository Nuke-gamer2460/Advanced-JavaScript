let executeFunctions = () => {
    // Function to output the value one to the console
    const funcOne = () => {
      console.log('one');
    };
  
    // Function to output the value two to the console
    const funcTwo = () => {
      console.log('two');
    };
  
    // Function to output the value three to the console and invoke funcOne and funcTwo
    const funcThree = () => {
      console.log('three');
      funcOne();
      funcTwo();
    };
  
    // Function to output the word four to the console and use setTimeout to invoke funcOne immediately and then funcThree
    const funcFour = () => {
      console.log('four');
      setTimeout(() => {
        funcOne();
        setTimeout(funcThree, 0);
      }, 0);
    };
  
    funcFour();
  };
  
  // Invoke the executeFunctions function to start the process
  executeFunctions();
  