import { resourceEnum } from "../enums/resourceEnum";

export interface Query {
  resource: resourceEnum;
  searchTerm: string; 
}