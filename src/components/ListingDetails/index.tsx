import classes from './listingDetails.module.scss'
import { ListingPropsModel } from "Models/ListingModel"
import ListingDetailsHeader from './ListingDetailsHeader'
import ListingDetailsNumbers from './ListingDetailsNumbers'

const ListingDetails = (props: ListingPropsModel) => {
   const { listing } = props

   return (
      <div className={classes.listingDetailsContainer}>
         <ListingDetailsHeader listing={listing} />
         <img src={listing.PictureURL} alt={listing.Title} />
         <ListingDetailsNumbers listing={listing} />
         <p className={classes.listingDetailsDescription}>{listing.Description}</p>
      </div>
   )
}

export default ListingDetails