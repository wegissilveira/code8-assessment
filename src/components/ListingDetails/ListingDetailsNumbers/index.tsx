import classes from './listingDetailsNumbers.module.scss'
import { ListingPropsModel } from "Models/ListingModel"

const ListingDetailsNumbers = (props: ListingPropsModel) => {
   const { listing } = props

   return (
      <div className={classes.listingDetailsNumbersContainer}>
         <div className={classes.listingDetailsNumbersInfos}>
            <p>{listing.Bedrooms}</p>
            <span>BED</span>
         </div>
         <div className={classes.listingDetailsNumbersInfos}>
            <p>{listing.Bathrooms}</p>
            <span>BATH</span>
         </div>
         <div className={classes.listingDetailsNumbersInfos}>
            <p>{listing.Parking}</p>
            <span>PARKING</span>
         </div>
         <div className={classes.listingDetailsNumbersInfos}>
            <p>{listing.Sqft}</p>
            <span>SQFT</span>
         </div>
         <div className={classes.listingDetailsNumbersInfos}>
            <p>{listing.YearBuilt}</p>
            <span>YEAR BUILT</span>
         </div>
      </div>
   )
}

export default ListingDetailsNumbers