import HeroSection from './component/heroSection'
import Tokenomics from './component/tokenomics'
import HowToBuy from './component/howtobuy'
import MarketPlace from './component/marketplace'
import Roadmap from './component/roadmap'
import Navbar from './component/navbar'
import CommunitySection from './component/community'
// import Footer from './component/Footer'

function App() {

  return (
    <>
     <Navbar/>
     <HeroSection/>
     <Tokenomics/>
     <HowToBuy/>
     <MarketPlace/>
     <Roadmap/>
     <CommunitySection/>
      {/* <Footer/>  */}
    </>
  )
}

export default App
