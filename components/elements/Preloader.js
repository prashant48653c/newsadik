
export default function Preloader() {
    return (
        <>

        <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close"><i className="icon-27"></i></div>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="j" className="letters-loading">
                                j
                            </span>
                            <span data-text-preloader="o" className="letters-loading">
                                o
                            </span>
                            <span data-text-preloader="b" className="letters-loading">
                                b
                            </span>
                            <span data-text-preloader="a" className="letters-loading">
                                a
                            </span>
                            <span data-text-preloader="w" className="letters-loading">
                                w
                            </span>
                            <span data-text-preloader="a" className="letters-loading">
                                a
                            </span>
                            <span data-text-preloader="y" className="letters-loading">
                                y
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
