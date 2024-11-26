function first() {
    console.log("First function");
  }
  
  function second() {
    first();
    console.log("Second function");
  }
  
  function third() {
    second();
    console.log("Third function");
  }
  
  third();
  