import { defaultGet } from "./defaultGet.js";
export const getAllPlanets = async () => defaultGet("/planets");

export const getOnePlanetById = async (id) => defaultGet(`/planets/${id}`);

export const getOnePlanetByName = async (name) =>
  defaultGet(`/planets?name=${name}`);
