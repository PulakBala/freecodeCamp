// Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

function testLogicalOr(val) {
    // Only change code below this line
  
    if (val > 20 || val < 10) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  console.log(testLogicalOr(15));