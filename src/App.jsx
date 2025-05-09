import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import HomePage from './components/HomePage.jsx'
import Products from './components/Products.jsx'
import Footer from './components/Footer.jsx'
import ContactUs from './components/ContactUs.jsx'
import PrePage from './components/PrePage.jsx'
import FoodCategoryCards from './components/FoodCategoryCards.jsx'

function App() {
  
  return (
    <>
      <PrePage />
      <NavBar />
      <LandingPage />
      <FoodCategoryCards />
      <HomePage />
      <Products />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
