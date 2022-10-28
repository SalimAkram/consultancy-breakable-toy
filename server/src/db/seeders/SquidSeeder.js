import { Factory } from "../../../test/factories/Factory.js";
import "../../../test/factories/factories.js";
import { Squid } from "../../models/index.js";
class SquidSeeder {
  static async seed() {
    const squids = await new Factory(Squid).createMany(20)

    for(const singleSquidData of squids) {
      const currentSquid = await Squid.query().findOne({ name: singleSquidData.name })
      if (!currentSquid) {
        await Squid.query().insert(singleSquidData)
      }
    }
  }
}

export default SquidSeeder;