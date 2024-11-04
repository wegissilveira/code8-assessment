import { useState, useEffect, useReducer } from 'react'
import classes from './listingFilter.module.scss'
import Dropdown from "components/shared/Dropdown"
import Button from "components/shared/Button"
import SliderValue from "components/shared/SliderValue"
import useMediaQuery from 'hooks/useMediaQuery'
import { mediaQueries } from 'utils'
import { getValues } from './helpers/getValues'
import filterReducer from './helpers/filterReducer'
import { ListingModel } from 'Models/ListingModel'
import { FilterValuesModel, FilterActionModel } from 'Models/FilterValuesModel'

type FilterProps = {
   listing: ListingModel[]
   setFilteredProducts: (filterState: FilterValuesModel) => void
}

const initialState: FilterValuesModel = {
   bedRoomsSelected: 0,
   bathRoomsSelected: 0,
   parkingSelected: 0,
   priceSelected: 0,
}

/**
 * A functional component that renders a filter section for real estate listings.
 *
 * @returns {JSX.Element} A JSX element representing the filter section.
 */
const ListingFilter = (props: FilterProps) => {
   const { setFilteredProducts, listing } = props
   const [filterState, dispatch] = useReducer(filterReducer, initialState)
   const [openFilter, setOpenFilter] = useState(false)
   const [priceValues, setPriceValues] = useState({ min: 0, max: 0 })
   const isNotDesktop = useMediaQuery(mediaQueries.smallDesktop)

   const toggleFilterHandler = () => {
      setOpenFilter(!openFilter)
   }

   const setFilterHandler = () => {
      setFilteredProducts(filterState)
   }

   const filterValuesHandler = (type: FilterActionModel['type'], payload: number) => {
      dispatch({ type, payload })
   }   

   useEffect(() => {
      setOpenFilter(!isNotDesktop)
   }, [isNotDesktop])

   useEffect(() => {
      const filterValuesPrice = getValues('Sale Price', listing)  

      setPriceValues({
         min: filterValuesPrice.minor,
         max: filterValuesPrice.bigger
      })    
   }, [listing])

   return (
      <div className={classes.ListingFilterContainer}>
         {isNotDesktop && 
            <Button 
               label={openFilter ? 'Close Filters' : 'Open Filters'} 
               onClick={toggleFilterHandler} 
         />}
            {
               openFilter && (
                  <div className={classes.ListingFilterSubContainer}>
                     <Dropdown 
                        label='Bedrooms' 
                        values={getValues('Bedrooms', listing).values} 
                        onSelect={(value) => filterValuesHandler('SET_BEDROOMS', value)} 
                     />
                     <Dropdown 
                        label='Bathrooms' 
                        values={getValues('Bathrooms', listing).values} 
                        onSelect={(value) => filterValuesHandler('SET_BATHROOMS', value)} 
                     />
                     <Dropdown 
                        label='Parking' 
                        values={getValues('Parking', listing).values} 
                        onSelect={(value) => filterValuesHandler('SET_PARKING', value)} 
                     />
                     <div className={classes.ListingFilterPriceSlider}>
                        <SliderValue 
                           label='Price Range' 
                           min={priceValues.min} 
                           max={priceValues.max} 
                           onChange={(value) => filterValuesHandler('SET_PRICE', value)} 
                        />
                     </div>
                     <Button label='Search' onClick={setFilterHandler} />
                  </div>
               )
            }
      </div>
   )
}

export default ListingFilter
