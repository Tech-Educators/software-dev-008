function calculate(a, b) {
    let addition = sum(a, b); // 36
    let result = divideByTwo(addition);
    return result;
  }
  
  // calculate(13,23)
  function sum(a, b) {
    return a + b;
  }
  
  function divideByTwo(param) {
    return param / 2
  }
  
  function log() {
    console.log(calculate(13, 23));
  }
  
  log()