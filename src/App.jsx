import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import HomePage from './components/HomePage.jsx'
import Products from './components/Products.jsx'
import Footer from './components/Footer.jsx'
import ContactUs from './components/ContactUs.jsx'
import PrePage from './components/PrePage.jsx'
import FoodCategoryCards from './components/FoodCategoryCards.jsx'
import Product_category from './components/products_category.jsx'
import CategoryCards from './components/CategoryCards.jsx'
import OfferContainer from './components/OfferContainer.jsx'
import Testimonials from './components/Testimonials.jsx'

function App() {
  
  return (
    <>
      <PrePage />
      <NavBar />
      <LandingPage />
      <HomePage />
      <FoodCategoryCards />
      <Product_category />
      <CategoryCards />
      <OfferContainer />
      <Products />
      <Testimonials />
      {/* <ContactUs /> */}
      <Footer />
    </>
  )
}

export default App
