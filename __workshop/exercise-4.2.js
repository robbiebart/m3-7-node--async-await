const request = require("request-promise");
const { application } = require("express");

const getTronaldDumpQuote = async () => {
  let joke = await request({
    uri: "https://api.tronalddump.io/random/quote",
    headers: { Accept: "application/json" },
  });
  joke = JSON.parse(joke);
  console.log("joke is", joke.value);
  return joke.value;
};

getTronaldDumpQuote();
