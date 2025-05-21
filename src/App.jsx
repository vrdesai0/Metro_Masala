// import NavBar from './components/NavBar'
// import HomePage from './components/HomePage.jsx'
// import Products from './components/Products.jsx'
// import Footer from './components/Footer.jsx'
// import PrePage from './components/PrePage.jsx'
// import FoodCategoryCards from './components/FoodCategoryCards.jsx'
// import Product_category from './components/products_category.jsx'
// import CategoryCards from './components/CategoryCards.jsx'
// import OfferContainer from './components/OfferContainer.jsx'
// import Testimonials from './components/Testimonials.jsx'
import LandingPage from './components/LandingPage'
import ContactUs from './components/ContactUs.jsx'
import AboutUs from './components/AbousUs.jsx'
import { Route, Routes } from 'react-router-dom'
import Shop from './components/Shop.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import CartPage from './components/CartPage.jsx'
import UserProfile from './components/UserProfile.jsx'

function App() {
  
  return (
    <>
      {/* <PrePage /> */}
    <Routes  >
      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/product-details' element={<ProductDetail />} />
      <Route path='/MyCart' element={<CartPage />} />
      <Route path='/MyProfile' element={<UserProfile />} />
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
