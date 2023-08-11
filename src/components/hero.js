import styles from "../app/page.module.css"
import Image from "next/image";

function Hero() {
    return (
      <main className={styles.main + " "}>
        <section
          className={
            styles.herosection +
            " uk-flex uk-flex-row uk-flex-around "
          }
        >
          <section
            className={
              styles.heroText + " uk-flex uk-flex-column uk-margin uk-flex-center"
            }
          >
            <div className={styles.short}>
              <h1>
                VELVET ATLAS <span className="uk-text-primary">LODGINGS</span>
              </h1>
            </div>
            <div className={styles.short}>Find your open source houses now , Join now and get your mind blown away</div>
            <div>
              <button className={"uk-button uk-button-secondary uk-margin-top "+ styles.heroBtn}>
                Get Started
              </button>
            </div>
          </section>
          <section className={styles.heroImg + "uk-flex-1"}>
            <div>
              <Image
                src="hero.svg"
                alt="Picture of the author"
                width={500}
                height={500}
                quality={100}
              />
            </div>
          </section>
        </section>
      </main>
    );
  }

  
  export default Hero;