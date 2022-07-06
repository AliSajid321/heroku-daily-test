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
  let response = await fetch("https://api.daily.co/v1/rooms", {
    method: "POST",
    headers: {
      
      'Authorization': "Bearer f4a863d72689d595c7b749746b2c2c9eb0e671497f4ef671e65c333dfc4863d9",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options),
    mode: 'cors',
  }),
    room = await response.json();
  return room;

}

export default { createRoom };
