import classes from './listingDetailsHeader.module.scss'
import { ListingPropsModel } from "Models/ListingModel"
import { formatDate, formatToCurrency } from 'utils'

const ListingDetailsHeader = (props: ListingPropsModel) => {
   const { listing } = props
   
   return (
      <div className={classes.listingDetailsHeaderContainer}>
         <div className={classes.listingDetailsHeaderInfos}>
            <p>{listing.Title}</p>
            <span>{listing.Location}</span>
         </div>
         <div className={classes.listingDetailsHeaderInfos}>
            <p>{formatToCurrency(listing['Sale Price'])}</p>
            <span>Date Listed: {formatDate(listing.DateListed)}</span>
         </div>
      </div>
   )
}

export default ListingDetailsHeader
