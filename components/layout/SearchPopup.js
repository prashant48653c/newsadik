import Link from "next/link"

export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>

            <div id="search-popup" className={`search-popup ${isPopup ? "popup-visible" : ""}`}>
                <div className="popup-inner">
                    <div className="upper-box">
                        <figure className="logo-box"><a href="index.html"><img src="assets/images/logo.png" alt=""/></a></figure>
                        <div className="close-search" onClick={handlePopup}><span className="icon-27"></span></div>
                    </div>
                    <div className="overlay-layer"></div>
                    <div className="auto-container">
                        <div className="search-form">
                            <form method="post" action="index.html">
                                <div className="form-group">
                                    <fieldset>
                                        <input type="search" className="form-control" name="search-input" placeholder="Search Here" required />
                                        <button type="submit"><i className="icon-1"></i></button>
                                    </fieldset>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
