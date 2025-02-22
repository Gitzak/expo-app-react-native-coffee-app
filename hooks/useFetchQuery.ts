import { useQuery } from "@tanstack/react-query";

const endpoint = "https://fake-coffee-api.vercel.app/api";

export function useFetchQuery(path: string) {
  return useQuery({
    queryKey: [path],
    queryFn: async () => {
      await wait(2);
      return fetch(endpoint + path).then((results) => results.json());
    },
  });
}

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration * 1000));
}
