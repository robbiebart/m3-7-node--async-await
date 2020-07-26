const request = require("request-promise");

const getGeekJoke = async () => {
  let joke = await request(
    "https://geek-jokes.sameerkumar.website/api?format=json"
  );
  joke = JSON.parse(joke);
  console.log("joke is", joke.joke);
  return joke.joke;
};
getGeekJoke();
