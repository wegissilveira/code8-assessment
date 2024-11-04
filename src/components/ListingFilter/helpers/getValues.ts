import { ListingModel } from "Models/ListingModel"
import { ValuesModel } from "Models/ValuesModel"

type NumericKeys<T> = {
   [K in keyof T]: T[K] extends number ? K : never
}[keyof T]

/**
 * Given a key that refers to a numeric property of a ListingModel and a list of ListingModels,
 * returns an object with the following properties:
 * - values: an array of unique values for the given key, sorted in ascending order
 * - minor: the smallest unique value for the given key
 * - bigger: the largest unique value for the given key
 *
 * If the list of products is empty, returns an object with values, minor, and bigger all set to 0.
 *
 * @param key the key that refers to a numeric property of a ListingModel
 * @param productsList the list of ListingModels
 * @returns an object with the unique values, the smallest unique value, and the largest unique value
 */
export const getValues = (
   key: NumericKeys<ListingModel>,
   productsList: ListingModel[]
): ValuesModel => {
   const uniqueValues: number[] = Array.from(
      new Set(productsList.map((item) => item[key]))
   ).sort((a, b) => a - b)

   const minor =
      uniqueValues.length > 0
         ? Math.min(...(uniqueValues as number[]))
         : 0
   const bigger =
      uniqueValues.length > 0
         ? Math.max(...(uniqueValues as number[]))
         : 0

   return {
      values: uniqueValues,
      minor,
      bigger
   }
}
