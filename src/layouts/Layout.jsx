import Hero from '../components/Hero'
import About from '../components/About'
import Pricing from '../components/Pricing'

const Layout = () => {
    return(
        <div className="lg:mx-24 md:mx-20 sm:mx-10 mx-5">
            <Hero  />
            <About />
            <Pricing />
        </div>
    )
}
export default Layout