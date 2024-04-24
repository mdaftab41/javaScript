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
  