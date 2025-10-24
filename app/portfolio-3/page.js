'use client'
import dynamic from 'next/dynamic'
const PortfolioFilter3 = dynamic(() => import('@/components/elements/PortfolioFilter3'), {
    ssr: false,
})
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'

export default function Portfolio_Three() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Portfolio Masonry">
            
            <PortfolioFilter3/>
            <Subscribe/>

            </Layout>
        </div>
    )
}