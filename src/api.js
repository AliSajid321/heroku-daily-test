import React from "react";
const newRoomEndpoint ="https://api.daily.co/v1/rooms";
const Daily_API_KEY= process.env.REACT_APP_DAILY_API_KEY;
const bearer = 'Bearer ' + Daily_API_KEY;
console.log(bearer);

/**
 * Create a short-lived room for demo purposes.
 *
 * It uses the redirect proxy as specified in netlify.toml`
 * This will work locally if you following the Netlify specific instructions
 * in README.md
 *
 * See https://docs.daily.co/reference#create-room for more information on how
 * to use the Daily REST API to create rooms and what options are available. 
 */
async function createRoom() {

  const exp = Math.round(Date.now() / 1000) + 60 * 30;
  const options = {
    properties: {
      exp: exp,
    },
  };
  let response = await fetch(newRoomEndpoint, {
    method: "POST",
    credentials: 'include',
    headers: {
      'Authorization': bearer,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options),
    mode: 'no-cors',
  }),
    room = await response.json();
  return room;

  // Comment out the above and uncomment the below, using your own URL
  // return { url: "https://your-domain.daily.co/hello" };
}

export default { createRoom };
