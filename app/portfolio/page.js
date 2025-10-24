'use client'
import dynamic from 'next/dynamic'
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), {
    ssr: false,
})
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'

export default function Portfolio() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Portfolio 3 Column">
            
            <PortfolioFilter1/>
            <Subscribe/>

            </Layout>
        </div>
    )
}