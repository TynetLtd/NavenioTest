import { useCallback, useState } from "react";
import { getStarWarsData } from '../api/starWarsData';
import { resourceEnum } from "../types/enums/resourceEnum";
import { Query } from '../types/interfaces/query';

export function useSearch<T>(resource: resourceEnum = resourceEnum.People) {
  const [result, setResult] = useState<Array<T>>();
  const submit = useCallback(
    (searhTerm: string) => {
      const query: Query = {
        resource: resource,
        searchTerm: searhTerm,
      }
      getStarWarsData<T>(query).then((response) => {
      debugger;
        if(response.count){
          setResult(response.results)
        }
      })
    }, [resource]
  )

  return {
    submit,
    result,
  }
}