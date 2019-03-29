// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function zipCommand1() {
  const receiver = "Set, Ready, Clear.";
  console.log(`Radio command 1- ${receiver}`);

  function zc2() {
    const sender = "Zipping.";
    console.log(`Radio command 2- ${sender}`);

    function zc3 () {
      const receiver = "Zip on!";
      console.log(`Radio command 3- ${receiver}`)
    }
    zc3();
  }
  zc2();
}
zipCommand1();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
