import { faker } from "@faker-js/faker";
import { Factory } from "rosie";

import { Squid } from "../../src/models/index.js";

Factory.define("Squid", Squid)
  .attr("name", () => faker.name.firstName())
  .attr("species", () => faker.animal.insect())
  .attr("specialPower", () => faker.random.word())
  .attr("experiencePoints", () => faker.datatype.number({ min: 1, max: 50 }))
  
export { Factory };