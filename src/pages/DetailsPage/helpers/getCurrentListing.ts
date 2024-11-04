import { ListingModel } from "Models/ListingModel"

export const getCurrentListing = (listing: ListingModel[], id: number): ListingModel | undefined => {
   return listing.find((item) => item.Id === id)
}