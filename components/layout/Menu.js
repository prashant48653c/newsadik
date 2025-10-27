import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul className="navigation clearfix">
                <li className=""><Link href="/">Home</Link>
                  
                </li>
                <li><Link href="/about">About</Link></li>
                <li className=""><Link href="/service">Service</Link>
                    
                </li>
                <li className=""><Link href="/blog">Blog</Link></li>

                   
             
               
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
