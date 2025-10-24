import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Clients from "@/components/sections/home2/Clients"
import About from "@/components/sections/home2/About"
import Chooseus from "@/components/sections/home2/Chooseus"
import Industries from "@/components/sections/home2/Industries"
import Dueal from "@/components/sections/home2/Dueal"
import Training from "@/components/sections/home2/Training"
import Pricing from "@/components/sections/home2/Pricing"
import Download from "@/components/sections/home2/Download"
import Testimonial from "@/components/sections/home2/Testimonial"
import News from "@/components/sections/home2/News"
import Subscribe from "@/components/sections/home2/Subscribe"

export default function Home_Two() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={2} footerStyle={2}>
                <Banner/>
                <Clients/>
                <About/>
                <Chooseus/>
                <Industries/>
                <Dueal/>
                <Training/>
                <Pricing/>
                <Download/>
                <Testimonial/>
                <News/>
                <Subscribe/>
            </Layout>
        </div>
    )
}