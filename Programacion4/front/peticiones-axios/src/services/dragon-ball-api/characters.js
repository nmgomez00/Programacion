import { defaultGet } from "./defaultGet.js";
export const getAllCharacters = async () => defaultGet("/characters");

export const getOneCharacterById = async (id) =>
  defaultGet(`/characters/${id}`);

export const getOneCharacterByName = async (name) =>
  defaultGet(`/characters?name=${name}`);
