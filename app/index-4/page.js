import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home4/Banner"
import Clients from "@/components/sections/home4/Clients"
import About from "@/components/sections/home4/About"
import Chooseus from "@/components/sections/home4/Chooseus"
import Industries from "@/components/sections/home4/Industries"
import Process from "@/components/sections/home4/Process"
import Service from "@/components/sections/home4/Service"
import Funfact from "@/components/sections/home4/Funfact"
import Dueal from "@/components/sections/home4/Dueal"
import Team from "@/components/sections/home4/Team"
import Download from "@/components/sections/home4/Download"
import News from "@/components/sections/home3/News"
import Subscribe from "@/components/sections/home4/Subscribe"

export default function Home_Four() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={4} footerStyle={4}>
                <Banner/>
                <Clients/>
                <About/>
                <Chooseus/>
                <Industries/>
                <Process/>
                <Service/>
                <Funfact/>
                <Dueal/>
                <Team/>
                <Download/>
                <News/>
                <Subscribe/>
            </Layout>
        </div>
    )
}