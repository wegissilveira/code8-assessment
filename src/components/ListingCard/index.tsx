import classes from './listingCard.module.scss'
import { useNavigate } from 'react-router-dom'
import { ListingPropsModel } from "Models/ListingModel"
import { formatToCurrency } from "utils"
import Button from 'components/shared/Button'

/**
 * A functional component that displays a listing card with details about a real estate property.
 * 
 * @param {ListingPropsModel} props - The properties passed to the component, including a `detail` object of type `ListingModel`.
 * @returns {JSX.Element} A JSX element representing the listing card, or an empty fragment if no details are provided.
 */
const ListingCard = (props: ListingPropsModel) => {
   const { listing: detail } = props

   const navigate = useNavigate()

   if (!detail) return <></>

   return (
      <div className={classes.listingCardContainer}>
         <img src={detail.ThumbnailURL} alt={detail.Title} />
         <div className={classes.listingCardWrapper}>
            <p className={classes.listingCardTitle}>{detail.Title}</p>
            <p className={classes.listingCardLocation}>{detail.Location}</p>
            <p className={classes.listingCardDetails}>{detail.Bedrooms} beds | {detail.Bathrooms} baths</p>
            <p className={classes.listingCardPrice}>{formatToCurrency(detail["Sale Price"])}</p>
            <Button label="View Details" onClick={() => navigate(`/details/${detail.Id}`)} />
         </div>
      </div>
   )
}

export default ListingCard