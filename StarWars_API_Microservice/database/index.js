const server = require("./src/server");
const { Character, Planet, Film } = require("./src/database");

// Character.find()
//     .populate("films", ["_id", "title"])
//     .populate

// .then((res) => console.log(res[0]))

//Planet.list().then((res) => console.log(res));

//  Planet.get(1).then((res) => console.log(res))

// Character.find({}).populate('films', ["_id", "title"]).then((res) => console.log(res[0]))
// Planet.find({}).populate('films', ["_id", "title"]).then((res) => console.log(res[0]))
// Film.find({}).populate('characters', ["_id", "name"]).then((res) => console.log(res[0]))

server.listen(8004, () => {
  console.log("Server listening on port 8004");
});
