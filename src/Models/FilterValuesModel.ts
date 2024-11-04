export type FilterValuesModel = {
   bedRoomsSelected: number
   bathRoomsSelected: number
   parkingSelected: number
   priceSelected: number
}

export type FilterActionModel =
   | { type: "SET_BEDROOMS"; payload: number }
   | { type: "SET_BATHROOMS"; payload: number }
   | { type: "SET_PARKING"; payload: number }
   | { type: "SET_PRICE"; payload: number }
