import RoutesComponent from "Routes"
import { BrowserRouter } from "react-router-dom"
import ListingProvider from "contexts/listingContext";

function App() {
  return (
    <BrowserRouter>
      <ListingProvider>
        <RoutesComponent />
      </ListingProvider>
    </BrowserRouter>
  )
}

export default App;
