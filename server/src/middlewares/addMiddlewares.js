import { addExpressSession } from "./addExpressSession.js";

export const addMiddlewares = async (app) => {
  addExpressSession(app);
};
