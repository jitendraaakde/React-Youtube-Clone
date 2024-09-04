import Hero from "./Hero"
import HeroCategories from "./HeroCategories"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Home = () => {
    return <>
        <Navbar />
        <HeroCategories />
        <Sidebar />
        <Hero />

    </>
}
export default Home