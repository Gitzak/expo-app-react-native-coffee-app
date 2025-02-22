import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const endpoint = "https://fake-coffee-api.vercel.app/api";

type Coffee = {
  _id: string;
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  weight: number;
  flavor_profile: string[];
  grind_option: string[];
  roast_level: number;
  image_url: string;
};

export function useFetchQuery(path: string) {
  return useQuery<Coffee[]>({
    queryKey: [path],
    queryFn: async () => {
      await wait(2);
      return fetch(`${endpoint}${path}`, {
        headers: {
          Accept: "application/json",
        },
      }).then((res) => res.json());
    },
  });
}

// in case pagination system exit

// export function useInfinitFetchQuery(path: string) {
//   return useInfiniteQuery({
//     queryKey: [path],
//     initialPageParam: endpoint + path,
//     queryFn: async ({ pageParam }) => {
//       await wait(2);
//       return fetch(pageParam, {
//         headers: {
//           Accept: "application/json",
//         },
//       }).then((results) => results.json());
//     },
//     getNextPageParam: (lastPage) => {
//         console.log(lastPage);

//       if ("next" in lastPage) {
//         return lastPage.next;
//       }
//       return null;
//     },
//   });
// }

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration * 1000));
}
