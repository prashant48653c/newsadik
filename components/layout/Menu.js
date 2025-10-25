import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul className="navigation clearfix">
                <li className=""><Link href="/#">Home</Link>
                  
                </li>
                <li><Link href="/about">About</Link></li>
                <li className="dropdown"><Link href="/#">Services</Link>
                    <ul>
                        <li><Link href="/service-details">Executive Search</Link></li>
                        <li><Link href="/service-details-2">Training Session</Link></li>
                        <li><Link href="/service-details-3">Career Growth</Link></li>
                        <li><Link href="/service-details-4">Payroll Services</Link></li>
                        <li><Link href="/service-details-5">Workforce System</Link></li>
                        <li><Link href="/service-details-6">Temporary Jobs</Link></li>
                    </ul>
                </li>
                <li className=""><Link href="/#">Team</Link></li>
                <li className=""><Link href="/#">Blog</Link></li>

                   
             
               
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
