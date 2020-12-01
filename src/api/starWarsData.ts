import { Query } from "../types/interfaces/query";
import { ResponseSet } from "../types/interfaces/responseSet";
import { genericGet } from "./apiUtils";

const baseUrl = 'https://swapi.dev/api/';

export function getStarWarsData<T>(query: Query) : Promise<ResponseSet<T>>{
  let url = `${baseUrl}${query.resource}/${query.searchTerm ? `?search=${query.searchTerm}` : ''}`;
  return genericGet<ResponseSet<T>>(url);
}
