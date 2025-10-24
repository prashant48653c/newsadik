import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home5/Banner"
import Industries from "@/components/sections/home5/Industries"
import Slide_Text from "@/components/sections/home3/Slide-text"
import About from "@/components/sections/home5/About"
import Chooseus from "@/components/sections/home5/Chooseus"
import Profile from "@/components/sections/home5/Profile"
import Featured from "@/components/sections/home5/Featured"
import Process from "@/components/sections/home1/Process"
import Welcome from "@/components/sections/home5/Welcome"
import Funfact from "@/components/sections/home4/Funfact"
import Testimonial from "@/components/sections/home5/Testimonial"
import News from "@/components/sections/home5/News"
import Subscribe from "@/components/sections/home4/Subscribe"

export default function Home_Five() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={5} footerStyle={5}>
                <Banner/>
                <Industries/>
                <Slide_Text/>
                <About/>
                <Chooseus/>
                <Profile/>
                <Featured/>
                <Process/>
                <Welcome/>
                <Funfact/>
                <Testimonial/>
                <News/>
                <Subscribe/>
            </Layout>
        </div>
    )
}