import styles from "./style.module.css"
import bg from "../../../public/images/img-bg-2.jpg"



export default function Seacrh() {
    return (
        
            <section className={styles.container + " bg-opacity-50"}>
                <section className={styles.appBar} >
                    <div>
                        <input type="search" placeholder="Enter an address, city or zip code" className="" />
                    </div>
                    <div>
                        <p>For Sale</p>
                    </div>
                    <div>
                        <p>Type: House</p>
                    </div>
                    <div>
                        <p>Min-Price: $500k</p>
                    </div>
                    <div>
                        <p>Max-Price: $700k</p>
                    </div>
                    <div>
                        <p>Square Floor: 60m2</p>
                    </div>
                </section>


                <section className={styles.mainBar}>
                        <section className={styles.cardBox}>
                        <section className={styles.cards}> 
                            {/* card1 */}
                                    <div className={styles.card + " uk-box-shadow-large"}>
                                        <div className={styles.cardImg + " "} style={{backgroundImage: "url("+ bg.src+ ")"}}>
                                            <div>
                                                <div>two</div>
                                                <div>one</div>
                                            </div>
                                        </div>
                                        <div className={styles.cardText + " uk-padding-small uk-box-shadow-medium"} >
                                            <h3 className="">$500,000</h3>
                                            <p className="uk-text-default uk-text-light text-light">Get a house in the valley of death in nile one a house in the valley of death </p>
                                            <div className={styles.subIcons}>
                                                <span className="uk-icon-link" uk-icon="menu">hi</span>
                                                <span className="uk-icon-link" uk-icon="menu">hi</span>
                                                <span className="uk-icon-link" uk-icon="menu">hi</span>
                                            </div>
                                        </div>
                                    </div>

                                {/* card2 */}
                                <div className={styles.card + " uk-box-shadow-large"}>
                                        <div className={styles.cardImg + " "} style={{backgroundImage: "url("+ bg.src+ ")"}}>
                                            <div>
                                                <div>two</div>
                                                <div>one</div>
                                            </div>
                                        </div>
                                        <div className={styles.cardText + " uk-padding-small uk-box-shadow-medium"} >
                                            <h3 className="">$500,000</h3>
                                            <p className="uk-text-default uk-text-light text-light">Get a house in the valley of death in nile one a house in the valley of death </p>
                                            <div className={styles.subIcons}>
                                                <span className="uk-icon-link" uk-icon="menu">hi</span>
                                                <span className="uk-icon-link" uk-icon="menu">hi</span>
                                                <span className="uk-icon-link" uk-icon="menu">hi</span>
                                            </div>
                                        </div>
                                    </div>
                                {/* card3 */} 
                                <div className={styles.card + " uk-box-shadow-large"}>
                                        <div className={styles.cardImg + " "} style={{backgroundImage: "url("+ bg.src+ ")"}}>
                                            <div>
                                                <div>two</div>
                                                <div>one</div>
                                            </div>
                                        </div>
                                        <div className={styles.cardText + " uk-padding-small uk-box-shadow-medium"} >
                                            <h3 className="">$500,000</h3>
                                            <p className="uk-text-default uk-text-light text-light">Get a house in the valley of death in nile one a house in the valley of death </p>
                                            <div className={styles.subIcons}>
                                                <span className="uk-icon-link" uk-icon="menu">hi</span>
                                                <span className="uk-icon-link" uk-icon="menu">hi</span>
                                                <span className="uk-icon-link" uk-icon="menu">hi</span>
                                            </div>
                                        </div>
                                    </div>
                                {/* card4 */} 
                                <div className={styles.card + " uk-box-shadow-large"}>
                                        <div className={styles.cardImg + " "} style={{backgroundImage: "url("+ bg.src+ ")"}}>
                                            <div>
                                                <div>two</div>
                                                <div>one</div>
                                            </div>
                                        </div>
                                        <div className={styles.cardText + " uk-padding-small uk-box-shadow-medium"} >
                                            <h3 className="">$500,000</h3>
                                            <p className="uk-text-default uk-text-light text-light">Get a house in the valley of death in nile one a house in the valley of death </p>
                                            <div className={styles.subIcons}>
                                                <span className="uk-icon-link" uk-icon="menu">hi</span>
                                                <span className="uk-icon-link" uk-icon="menu">hi</span>
                                                <span className="uk-icon-link" uk-icon="menu">hi</span>
                                            </div>
                                        </div>
                                    </div>
                        </section>
                        <section>
                            <div className={styles.load}>Load More....</div>
                        </section>
                        </section>
                        <section className={styles.map}>
                         <div className={styles.mapouter}>
                            <div className={styles.gmapcanvas}>
                                <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=nigeria&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                    </iframe><a href="https://2yu.co">2yu</a> <br />
                                    <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
                            </div>
                        </div>
                </section>
                       
                </section>
                
            </section>
        
    )
}