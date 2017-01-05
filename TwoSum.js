'use strict';
// Two Sum: Write a function that takes an array of integers and a target integer. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].
// input: [1, 2, 3, 4, 5, 6, 7], 13
// output: [5,6]

// Write tests for it
// Some hints to get you started if you want to use Mocha test suite with the Chai Assertion library
// npm init
// npm install mocha chai --save

module.exports = {
  //code goes here
  twoSum: function (inputArr, sumNum) {
    if (arguments.length !== 2) {
      return ("Only two arguments are accepted.");
    }
    if (!Array.isArray(inputArr)) {
      return("Inputs of an array and an integer is expected!");
    }
    if (typeof sumNum !== 'number') {
      return("Inputs of an array and an integer is expected!");
    }

    var outputArr = [];
    for (let i=0; i < inputArr.length; i++){
      for (let j=(i+1); j < inputArr.length; j++) {
        if ((inputArr[i] + inputArr[j]) === sumNum) {
          outputArr[0] = i;
          outputArr[1] = j;
        }
      }
    }
    console.log(outputArr);
    return (outputArr);




  }
};
