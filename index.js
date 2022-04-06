function callback() {
    console.log("hello")
  }

  function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    return function namedFunction() {
        return hi()
    };
  }

  function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
}