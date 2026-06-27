import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../routers/Routers'
import ScrollToTop from '../common/ScrollToTop'
import SmoothScroll from '../common/SmoothScroll'
import { BrowserRouter as Router } from 'react-router-dom'

function Layout() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <Header />
        <Routers />
        <Footer />
      </SmoothScroll>
    </Router>
  )
}

export default Layout
