import axios from "axios"

/**
 * Fetches a list of real estate listings from a remote JSON endpoint.
 *
 * @returns {Promise<any>} A promise that resolves to the data containing the list of real estate listings.
 * @throws {Error} Throws an error if the network request fails.
 */
const getListing = async (): Promise<any> => {
   const response = await axios.get(
      // "https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json" // for reference
      'https://api.jsonbin.io/v3/b/672930e1e41b4d34e44e67f1'
      
   )

   return response.data.record
}

export default getListing