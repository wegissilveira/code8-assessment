import { useQuery } from "react-query"
import getListing from "services/getListing"

const useGetListing = () => {
   const {
      data: listing,
      error,
      isLoading,
   } = useQuery(["getListing"], getListing, {staleTime: Infinity, cacheTime: Infinity})

   return { listing, error, isLoading }
}

export default useGetListing