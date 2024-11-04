import { createContext, useContext, useState, useEffect } from "react"
import { ListingModel } from "Models/ListingModel"
import useGetListing from "hooks/useGetListing"

type ListingContextType = {
   listing: ListingModel[]
   isLoading: boolean
}
type ListingContextProps = {
   children: React.ReactNode   
}

const ListingContextData = createContext<ListingContextType>({} as ListingContextType)

const ListingProvider = (props: ListingContextProps) => {
   const { children } = props
   const [listing, setListing] = useState<ListingModel[]>([])

   const { listing: fetchedListing, isLoading, error } = useGetListing()

   useEffect(() => {
      setListing(fetchedListing)
   }, [fetchedListing])

   useEffect(() => {
      if (error) alert('Something went wrong. Try again later.')
   }, [error])

   return (
      <ListingContextData.Provider value={{listing, isLoading}}>
         {children}
      </ListingContextData.Provider>
   )
}

export default ListingProvider

export const useListingContextData = () => useContext(ListingContextData)