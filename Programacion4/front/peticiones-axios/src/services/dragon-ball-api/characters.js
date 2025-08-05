import { instanceDBS } from "./index.js";
import { HttpStatusCode } from "axios";

const defaultGet = async (url) => {
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

export const getAllCharacters = async () => defaultGet("/characters");

export const getOneCharacterById = async (id) =>
  defaultGet(`/characters/${id}`);

export const getOneCharacterByName = async (name) =>
  defaultGet(`/characters?name=${name}`);
