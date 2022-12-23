import { faker } from "@faker-js/faker";
import { Factory } from "rosie";

import { Squid } from "../../src/models/index.js";
import { assignRandomNumber } from "../utils/assignRandomNumber.js";

const specialPowers = ["ink", "camouflage", "bioluminescence", "flight"];

Factory.define("Squid", Squid)
  .attr("name", () => faker.name.firstName())
  .attr("species", () => faker.animal.insect())
  .attr("specialPower", () => specialPowers[assignRandomNumber(specialPowers.length)])
  .attr("experiencePoints", () => faker.datatype.number({ min: 1, max: 10 }));

export { Factory };
