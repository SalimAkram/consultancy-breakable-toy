/* eslint-disable import/no-default-export */
import { Factory } from "../../../test/factories/Factory.js";
import "../../../test/factories/factories.js";
import { Squid } from "../../models/index.js"

class SquidSeeder {
  static async seed() {
    const squidData = [
      {
        name: "dudeGuy Boogie",
        species: "Monster Face",
        specialPower: "ink",
        experiencePoints: 10
      },
      {
        name: "Boogie Booty",
        species: "Animal Face",
        specialPower: "camouflage",
        experiencePoints: 5
      },
      {
        name: "Boogie Dancer",
        species: "Water Swimmer",
        specialPower: "bioluminescence",
        experiencePoints: 5
      }
    ]

    for (const singleSquidData of squidData) {
      const currentSquid = await Squid.query().findOne({ name: singleSquidData.name })
      if (!currentSquid) {
        await Squid.query().insert(singleSquidData)
      }
    }
  }
}

export default SquidSeeder;