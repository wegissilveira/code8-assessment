import classes from './listingGallery.module.scss'
import ListingCard from "components/ListingCard"
import { ListingModel } from "Models/ListingModel"

type ListingGalleryProps = {
   listing: ListingModel[]
}

/**
 * A functional component that renders a gallery of listing cards.
 * 
 * @param {ListingGalleryProps} props - The properties passed to the component, which includes a `listing` array of `ListingModel` objects.
 * @returns {JSX.Element} A JSX element representing the gallery of listing cards, or an empty fragment if no listings are provided.
 */
const ListingGallery = (props: ListingGalleryProps) => {
   const { listing } = props

   if (listing.length === 0) return <>NO PRODUCTS FOUND</>

   return (
      <div className={classes.listingGalleryContainer}>
         {listing.map((detail) => (
            <ListingCard key={detail.Id} listing={detail} />            
         ))}
      </div>
   )
}

export default ListingGallery