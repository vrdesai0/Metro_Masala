import '../offerContainer.css'

function OfferContainer() {
    return (
        <>
            <div className="promo-container">
                {/* <!-- First Card --> */}
                <div className="promo-card">
                    <div className="promo-text">
                        <p className="promo-discount">10% off</p>
                        <h2 className="promo-title">Grab The Best Deal</h2>
                        <p className="promo-desc">
                            Get 10% off your very first order from Herbs N Spices. Read this guide
                            to grab the best discount offer and coupons you will get to spice up your life.
                        </p>
                        <button className="promo-button">Read More</button>
                    </div>
                    <div className="promo-image promo-yellow">
                        <img src="your-image-path-1.png" alt="spices" />
                    </div>
                </div>

                {/* <!-- Second Card --> */}
                <div className="promo-card">
                    <div className="promo-text">
                        <p className="promo-subheading">Spice Spotlight</p>
                        <h2 className="promo-title">Must-Have Spices At Home</h2>
                        <p className="promo-desc">
                            Find out what spices and herbs you must keep at home at all times. Get an insight into your kitchen must-haves and learn new recipes from us.
                        </p>
                        <button className="promo-button">Read More</button>
                    </div>
                    <div className="promo-image promo-pink">
                        <img src="your-image-path-2.png" alt="spices" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default OfferContainer