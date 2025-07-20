import './App.css'
import Hero from './components/Hero';
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent';
import ProductCategorySlider from './components/ProductCategorySlider';
import TestimonialSection from './components/TestimonialSection';
import BusinessPartnerSection from './components/BusinessPartnerSection';
import OurProgramSection from './components/OurProgramSection';
import OurProductSection from './components/OurProductSection';


function App() {
  return (
    <>
      <Hero />
      <WhatMakesUsDifferent />
      <OurProductSection />
      <ProductCategorySlider />
      <TestimonialSection />
      <BusinessPartnerSection />
      <OurProgramSection />
    </>
  )
}

export default App
