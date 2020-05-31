// this script represents a full integration with a philips hue type bulb, and interacts with it

const homewatch = require("../src/api").HomewatchApi;
const jose = {
  name: "jose",
  email: "leocgoncalves11@gmail.com",
  password: "123456",
};
const room = {
  name: "nomeroom",
};

async function main() {
  // try and register the user, if it doesnt exist
  try {
    await homewatch.users.register(jose);
  } catch (err) {
    console.error(err);
    console.error(`CODE:${err.response.status} DATA:${JSON.stringify(err.response.data)}`);
  }
    // login
    let user = await homewatch.users.login(jose);
    homewatch.auth = user.data.jwt;
    let home = await homewatch.homes.createHome({ name: "name", tunnel: "tunnel", location: "meme" });

    let createroom = await homewatch.rooms(home).createRoom(room);
    console.log(createroom);
}

main();
