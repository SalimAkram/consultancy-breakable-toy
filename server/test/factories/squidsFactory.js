import { faker } from "@faker-js/faker";
import { Factory } from "rosie";

import { Squid } from "../../src/models/index.js";

Factory.define("Squid", Squid)
  .attr("name", )
  .attr("species", )
  .attr("experiencePoints", )
  .attr("specialPower", );
  
export { Factory };