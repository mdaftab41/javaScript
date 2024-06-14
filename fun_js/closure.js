function showHelp(help) {
    document.getElementById("help").textContent = help;
  }
  
  function setupHelp() {
    var helpText = [
      { id: "email", help: "Your email address" },
      { id: "name", help: "Your full name" },
      { id: "age", help: "Your age (you must be over 16)" },
    ];
  
    for (var i = 0; i < helpText.length; i++) {
      (function () {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = function () {
          showHelp(item.help);
        };
      })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
    }
  }
  
  setupHelp();


  // another code
  const makeCounter = function () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  };
  
  const counter1 = makeCounter();
  const counter2 = makeCounter();
  
  console.log(counter1.value()); // 0.
  
  counter1.increment();
  counter1.increment();
  console.log(counter1.value()); // 2.
  
  counter1.decrement();
  console.log(counter1.value()); // 1.
  console.log(counter2.value()); // 0.
  

  // code 3
  function iCantThinkOfAName(num, obj) {
    // This array variable, along with the 2 parameters passed in, 
    // are 'captured' by the nested function 'doSomething'
    var array = [1, 2, 3];
    function doSomething(i) {
      num += i;
      array.push(num);
      console.log('num: ' + num);
      console.log('array: ' + array);
      console.log('obj.value: ' + obj.value);
    }
    
    return doSomething;
  }
  
  var referenceObject = { value: 10 };
  var foo = iCantThinkOfAName(2, referenceObject); // closure #1
  var bar = iCantThinkOfAName(6, referenceObject); // closure #2
  
  foo(2); 
  /*
    num: 4
    array: 1,2,3,4
    obj.value: 10
  */
  
  bar(2); 
  /*
    num: 8
    array: 1,2,3,8
    obj.value: 10
  */
  
  referenceObject.value++;
  // colling function
  foo(4);
  /*
    num: 8
    array: 1,2,3,4,8
    obj.value: 11
  */
  
  bar(4); 
  /*
    num: 12
    array: 1,2,3,8,12
    obj.value: 11
  */