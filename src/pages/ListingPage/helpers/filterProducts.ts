import { ListingModel } from "Models/ListingModel"

/**
 * Filters a list of products according to the given filters.
 *
 * @param productsList - The list of products to filter.
 * @param maxPrice - The maximum price for the products.
 * @param minBathrooms - The minimum number of bathrooms for the products.
 * @param minParking - The minimum number of parking spaces for the products.
 * @param minBedrooms - The minimum number of bedrooms for the products.
 * @returns The filtered list of products.
 */
export const filterProducts = (
   productsList: ListingModel[],
   minPrice: number,
   minBathrooms: number,
   minParking: number,
   minBedrooms: number
): ListingModel[] => {
   return productsList.filter(
      (product) =>
         product["Sale Price"] >= minPrice &&
         product.Bathrooms >= minBathrooms &&
         product.Parking >= minParking &&
         product.Bedrooms >= minBedrooms
   )
}
