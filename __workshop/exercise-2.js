// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require("request-promise");

const getIssPosition = async () => {
  try {
    const response = await request("http://api.open-notify.org/iss-now.json");
    const parsedResponse = JSON.parse(response);
    let lng = parsedResponse.iss_position.longitude;
    let lat = parsedResponse.iss_position.latitude;
    let result = { lng, lat };
    // console.log("result here", result);
    return result;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const result = async () => {
  const result = await getIssPosition();
  console.log(result);
};
result();

getIssPosition().then((result) => console.log(result));
