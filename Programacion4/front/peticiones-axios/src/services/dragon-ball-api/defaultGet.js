import { instanceDBS } from "./index.js";
import { HttpStatusCode } from "axios";
export const defaultGet = async (url) => {
  const { data, status } = await instanceDBS.get(url);
  switch (status) {
    case HttpStatusCode.Ok:
      return data;
    case HttpStatusCode.NotFound:
      console.log("not found");
      break;
    case HttpStatusCode.InternalServerError:
      console.log("internal server error");
      break;
    default:
      throw new Error("unexpected error");
  }
};
