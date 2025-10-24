import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import Chooseus from "@/components/sections/home3/Chooseus"
import Clients from "@/components/sections/home3/Clients"
import About from "@/components/sections/home3/About"
import Category from "@/components/sections/home3/Category"
import Download from "@/components/sections/home3/Download"
import Industries from "@/components/sections/home3/Industries"
import Welcome from "@/components/sections/home3/Welcome"
import Slide_Text from "@/components/sections/home3/Slide-text"
import Testimonial from "@/components/sections/home3/Testimonial"
import Dueal from "@/components/sections/home3/Dueal"
import News from "@/components/sections/home3/News"
import Apps from "@/components/sections/home3/Apps"

export default function Home_Three() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={3}>
                <Banner/>
                <Chooseus/>
                <Clients/>
                <About/>
                <Category/>
                <Download/>
                <Industries/>
                <Welcome/>
                <Slide_Text/>
                <Testimonial/>
                <Dueal/>
                <News/>
                <Apps/>
            </Layout>
        </div>
    )
}