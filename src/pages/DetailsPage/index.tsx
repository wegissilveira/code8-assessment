import { useState, useEffect } from 'react'
import classes from './detailsPage.module.scss'
import { useListingContextData } from "contexts/listingContext"
import { getCurrentListing } from "./helpers/getCurrentListing"
import { formObject } from "./helpers/formObject"
import { useParams } from 'react-router-dom'
import { ListingModel } from "Models/ListingModel"
import ListingDetails from 'components/ListingDetails'
import DynamicForm from 'components/Form'
import Button from 'components/shared/Button'

const DetailsPage = () => {
   const [ currentListing, setCurrentListing ] = useState<ListingModel>()

   const { listing } = useListingContextData()
   const { prodId } = useParams()

   const handleSubmit = (data: Record<string, string>) => {
      console.log("Form submitted with data:", data)
   }

   useEffect(() => {
      if (listing && prodId) {
         const listingDetails = getCurrentListing(listing, Number(prodId))
         setCurrentListing(listingDetails)
      }
   }, [prodId, listing])

   if (!currentListing) return <>LISTING IS NOT AVAILABLE</>
   
   return (
      <div className={classes.detailsPageContainer}>
         <div className={classes.detailsInfoWrapper}>
            <ListingDetails listing={currentListing} />
         </div>
         <div className={classes.detailsWishlistWrapper}>
            <Button label='Save Property' />
         </div>
         <div className={classes.detailsFormWrapper}>
            <DynamicForm
               title="Contact Agent"
               buttonLabel="Contact Now"
               fields={formObject}
               onSubmit={handleSubmit}
            />
         </div>
      </div>
   )
}

export default DetailsPage