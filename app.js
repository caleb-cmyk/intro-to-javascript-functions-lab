/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  function isAdult(age) {
    if (age > 18) {
        return "Adult";
    } else {
        return "Minor";
    }
  }

  console.log('Exercise 2 Result:', isAdult(21))

  function isCharAVowel(char) {
    
    // const vowels = ["a", "e", "i", "o", "u"];
    // for (let i = 0; i < vowels.length; i++) {
    //     console.log(i);
    // }
    // iterate loop within if() below

    if (char === "a" || 
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    ) {
        return "True";
    } else {
        return "False";
    }
  }

  console.log('Exercise 3 Result:', isCharAVowel("a"))

  function generateEmail (name, domain) {
    return (name + "@" + domain);    
  }

  console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"))

  function greetUser(name, time) {
    return ("Good " + time + ", " + name + "!");
  }

  console.log('Exercise 5 Result:', greetUser("Sam", "morning"))

  function maxOfThree(num1, num2, num3) {
    return (Math.max(num1, num2, num3));
  }

  console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))

  function calculateTip (bill, tip) {
    return (Math.round(tip / 100 * bill));
  }

  console.log('Exercise 7 Result:', calculateTip(50, 30))

  function convertTemperature(temp, unit) {
    if (unit === "C") {
        return (temp * (9/5) + 32 + " (Fahrenheit)")
    } else if (unit === "F") {
        return ((temp - 32) * (5/9) + " (Celsius)")
      } else {
        return ("Fahrenheit or Celsius?")
      }
    }

  console.log('Exercise 8 Result:', convertTemperature(32, "C"))

  function basicCalculator(num1, num2, operation) {
    if (operation === "add") {
      return (num1 + num2);
    } else if (operation === "subtract") {
      return (num1 - num2);
    } else if (operation === "multiply") {
      return (num1 * num2);
    } else if (operation === "divide") {
      return (num1 / num2);
    } else {
      return ("Do what with the numbers?");
    }
  }

  console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"))


  /*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (score) => {
  if (score >= 90) {
    return "A"
  } if (score >= 80) {
    return "B"
  } if (score >= 70) {
    return "C"
  } if (score >= 60) {
    return "D"
  } else {
    return "F"
  }
}

console.log('Exercise 10 Result:', calculateGrade(85));

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

const createUsername = (first, last) => {
  const sumChar = first.length + last.length;
  return (first.slice(0,3) + (last.slice(0,3) + sumChar))
};

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

function numArgs() {
  return (arguments.length);
} 

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));