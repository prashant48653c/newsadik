'use client'
import dynamic from 'next/dynamic'
const PortfolioFilter2 = dynamic(() => import('@/components/elements/PortfolioFilter2'), {
    ssr: false,
})
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'

export default function Portfolio_Two() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Portfolio 2 Column">
            
            <PortfolioFilter2/>
            <Subscribe/>

            </Layout>
        </div>
    )
}