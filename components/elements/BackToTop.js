
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <a className="scroll-top scroll-to-target" href="#top">
                    <i className="fas fa-angle-up"></i>
                </a>
                
            )}
        </>
    )
}