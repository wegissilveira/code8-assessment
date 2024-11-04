import { Routes, Route } from "react-router-dom"
import { useListingContextData } from "contexts/listingContext"
import LoadingContainer from 'components/shared/LoadingContainer'
import ListingPage from "pages/ListingPage"
import DetailsPage from "pages/DetailsPage"

/**
 * A functional component that manages the routing of the application.
 * It checks if the listings data is loading, and renders a loading container if true.
 * Once the data is loaded, it sets up routes for the listing page and details page.
 *
 * @returns {JSX.Element} A JSX element representing the application's routes.
 */
const RoutesComponent = () => {
   const { isLoading } = useListingContextData()
   
   if (isLoading) return <LoadingContainer message='Loading Listing...' />

   return (
      <Routes>
         <Route path="/" element={<ListingPage />} />
         <Route path="/details/:prodId" element={<DetailsPage />} />
      </Routes>
   )
}

export default RoutesComponent