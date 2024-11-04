import { FilterValuesModel, FilterActionModel } from 'Models/FilterValuesModel'

/**
 * A reducer function that manages updates to the filter state 
 * based on the specified action type and payload.
 *
 * @param {FilterValuesModel} state - The current state of the filter values.
 * @param {FilterActionModel} action - The action to perform, including a type and payload.
 * @returns {FilterValuesModel} The new state with the updated filter values.
 */
const filterReducer = (state: FilterValuesModel, action: FilterActionModel): FilterValuesModel => {
   switch (action.type) {
      case 'SET_BEDROOMS':
         return { ...state, bedRoomsSelected: action.payload }
      case 'SET_BATHROOMS':
         return { ...state, bathRoomsSelected: action.payload }
      case 'SET_PARKING':
         return { ...state, parkingSelected: action.payload }
      case 'SET_PRICE':
         return { ...state, priceSelected: action.payload }
      default:
         return state
   }
}

export default filterReducer