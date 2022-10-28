const axios = require("axios");

const getSquids = async () => {
  try {
    const response = await axios.get("api/v1/squids");
    //error Handling logic here
    const body = await response;
    return body;
  } catch (error) {
    console.error(error);
  }
};
  
export { getSquids };
