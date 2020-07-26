const request = require("request-promise");

// getDadJoke

// 4.1
// getJoke().then((data) => console.log(data));

const getDadJoke = async () => {
  let joke = await request({
    uri: "https://icanhazdadjoke.com/",
    headers: { Accept: "application/json" },
  });
  joke = JSON.parse(joke);
  console.log("joke", joke.joke);
  return joke.joke;
};
getDadJoke();
