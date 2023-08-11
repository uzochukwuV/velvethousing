import styles from "../app/page.module.css"
import Link from "next/link";

function NavBar() {
    return (
      <header
        className={
          "header uk-flex uk-flex-row uk-flex-between " +
          styles.header
        }
      >
        <section className="uk-flex uk-flex-row uk-navbar-justify">
          <div className="uk-margin-right">
            <div className="uk-h1 uk-margin-remove uk-text-center">
              Velvet
              <h6 className={"uk-margin-remove "}>
              Atlas Housing
            </h6>
            </div>
            
          </div>
          <div className="uk-margin">
            <form className="uk-search uk-search-default">
              <span uk-search-icon="true"></span>
              <input 
                style={{backgroundColor: "#f3f3f3"}}
                className={"uk-search-input uk-padding-small uk-border-rounded "+ styles.navSearch}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </section>
        <section className={"uk-flex uk-flex-row " + styles.links}>
          <nav
            className={
              "uk-flex uk-flex-row uk-text-center uk-text-middle " +
              styles.navLinks
            }
          >
            <div>BUY</div>
            <div>RENT</div>
            <div>SAVED HOUSES</div>
            <div>SAVED SEARCHES</div>
          </nav>
          <div
            className={"uk-flex uk-flex-between uk-text-middle" + styles.heroText}
          >
            <div>
              <Link href="/signup/signup" ><button className={styles.navBtn+  " uk-border-rounded"}>Login|Signup</button></Link>
            </div>
            <div className={" uk-text-center uk-flex-1 " + styles.menuIcon}>
              <a href="#" className="uk-icon-link" uk-icon="menu"></a>
            </div>
          </div>
        </section>
      </header>
    );
  }

  export default NavBar;