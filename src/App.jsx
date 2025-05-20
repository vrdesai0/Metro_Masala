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
import AboutUs from './components/AbousUs.jsx'
import { Route, Routes } from 'react-router-dom'
import Shop from './components/Shop.jsx'

function App() {
  
  return (
    <>
      <PrePage />
    <Routes  >
      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/shop' element={<Shop />} />
    </Routes>
    <Routes  >
      <Route path='/' element={<LandingPage />} />
    </Routes>
    {/* <NavBar /> */}
    {/* <LandingPage />
    <HomePage />
      <FoodCategoryCards />
      <Product_category />
      <CategoryCards />
      <OfferContainer />
      <Products />
      <Testimonials /> */}
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    {/* <AboutUs /> */}
    </>
  )
}

export default App
