/**
 * Format a number to a currency string.
 *
 * @param value - The number to be formatted.
 * @returns A string representing the number in the format of a currency, with the currency symbol
 *          and the number separated by a single space.
 * @example
 * formatToCurrency(1000) // "$ 1000"
 * formatToCurrency(1000000) // "$ 1 000 000"
 */
export const formatToCurrency = (value: number) => {
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    }).format(value)

   return formatted.replace(/,/g, " ")
 }