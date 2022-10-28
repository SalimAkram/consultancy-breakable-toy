const Model = require("./Model");
const uniqueFactory = require("objection-unique");

const unique = uniqueFactory({
  fields: ["name"],
  identifiers: ["id"]
})

class Squid extends unique(Model) {
  static get tableName() {
    return "squids"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "species", "experiencePoints"],
      properties: {
        name: { type: "string"},
        species: { type: "string"},
        specialPower: { type: "string"},
        experiencePoints: { type: "integer"}
      }
    }
  }
}

module.exports = Squid