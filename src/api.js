import React from "react";
const newRoomEndpoint ="https://api.daily.co/v1/rooms";
const Daily_API_KEY= process.env.REACT_APP_DAILY_API_KEY;
const bearer = 'Bearer ' + Daily_API_KEY;
console.log(bearer);


async function createRoom() {

  const exp = Math.round(Date.now() / 1000) + 60 * 30;
  const options = {
    properties: {
      exp: exp,
    },
  };
  let response = await fetch(newRoomEndpoint, {
    method: "POST",
    headers: {
      
      'Authorization': bearer,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options),
    mode: 'cors',
  }),
    room = await response.json();
  return room;

}

export default { createRoom };
