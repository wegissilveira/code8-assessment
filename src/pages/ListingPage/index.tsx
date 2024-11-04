import { useState } from 'react'
import classes from './listingPage.module.scss'
import ListingFilter from 'components/ListingFilter'
import ListingGallery from "components/ListingGallery"
import { useListingContextData } from "contexts/listingContext"
import { filterProducts } from './helpers/filterProducts'
import { ListingModel } from "Models/ListingModel"
import { FilterValuesModel } from 'Models/FilterValuesModel'

/**
 * A functional component that represents the main page for listing real estate properties.
 * It displays a filter section and a gallery of listings. The filter section allows users
 * to filter listings based on criteria such as price, number of bedrooms, bathrooms, and parking.
 * The gallery displays the filtered or unfiltered listings based on the filter state.
 *
 * @returns {JSX.Element} The JSX element representing the listing page.
 */
const ListingPage = () => {
   const [ isFilterOn, setIsFilterOn ] = useState(false)
   const [ filteredProducts, setFilteredProducts ] = useState<ListingModel[]>([])
   const { listing } = useListingContextData()

   const filterProductsHandler = (filterValues: FilterValuesModel) => {
      const { 
         priceSelected, 
         bathRoomsSelected, 
         parkingSelected, 
         bedRoomsSelected 
      } = filterValues

      const filteredListings = 
         filterProducts(
            listing, 
            priceSelected, 
            bathRoomsSelected, 
            parkingSelected, 
            bedRoomsSelected
         )
         
      setIsFilterOn(true)
      setFilteredProducts(filteredListings)
   }   
   
   if (!listing) return <></>

   return (
      <div className={classes.listingPageContainer}>
         <ListingFilter setFilteredProducts={filterProductsHandler} listing={listing} />
         <ListingGallery listing={isFilterOn ? filteredProducts : listing} />
      </div>
   )
}

export default ListingPage