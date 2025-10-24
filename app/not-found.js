
import Link from "next/link"
export default function Error() {

    return (
        <>
            <section className="error-section centred pt_200 pb_120">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>404</h1>
                        <h3>Page Not Found</h3>
                        <p>This page doesn’t exist or was removed! We suggest you <br />go back to home.</p>
                        <Link href="/" className="theme-btn btn-one">Back to Homepage</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
