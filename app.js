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
    if (unit= "C") {
        return {temp in f + " (Fahrenheit)"
        };
    if (unit = "F") {
        return {temp in c + " (Celcius)"}
    }
    }
  }

  console.log('Exercise 8 Result:', convertTemperature(32, "C"))