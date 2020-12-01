function getHeaders(): Promise<Headers> {
  return Promise.resolve(
    new Headers({
      Accept: 'application/json',
      'content-type': 'application/json',
    })
  );
}

export function genericGet<TResult>(url: string): Promise<TResult> {
  return getHeaders().then((headers: Headers) => {
    return fetch(url, {
      headers,
    })
      .then((response: Response) => {
        if (response.status === 404) {
          return null;
        }
        const result = response.json();
        return result;
      })
      .then((data: TResult) => {
        return data;
      })
      .catch((err: unknown) => {
        throw err;
      });
  });
}
