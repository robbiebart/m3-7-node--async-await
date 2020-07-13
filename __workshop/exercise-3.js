// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
  return new Promise((resolve) => {
    console.log("hang on a second or two");
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
};

doublesLater(2).then((result) => {
  console.log(result);
});

// 3. handleSum function (async/await)

const handleSum = async (num) => {
  try {
    let theSum = 0;
    const a = await doublesLater(num);
    theSum += a;
    console.log("the sum", theSum, "plus ", a);
    const b = await doublesLater(a);
    theSum += b;
    console.log("the sum", theSum, "plus ", b);
    const c = await doublesLater(b);
    theSum += c;
    console.log("the sum", theSum, "plus ", c);
    return theSum;
  } catch (err) {
    console.log("ERROR: ", err);
  }
};

// 4. verification
handleSum(1).then((ans) => console.log(ans));

//  setTimeout(() => {resolve(num*2) sec * 2000});
// })
