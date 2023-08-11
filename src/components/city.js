import styles from "../app/page.module.css"

function Cities() {
    return (
      <section className="">
        <div>
          <h3 className={"uk-text-center  uk-padding " + styles.colorlight}>
            Popular Cities
          </h3>
        </div>
        <div>
          <div
            className="uk-position-relative uk-section-default uk-padding uk-visible-toggle uk-comment-primary"
            tabindex="-1"
            uk-slider="true"
          >
            <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
              <li>
                <div className="uk-panel">
                  <img
                    src="cityImg.jpg"
                    width="400"
                    height="600"
                    alt=""
                    className="uk-border-rounded uk-card uk-box-shadow-small"
                  />
                  <div className="uk-position-left uk-panel uk-margin-small-left uk-margin-small-top">
                    <span uk-icon="icon: heart; ratio: 1.5"></span>
                  </div>
                  <div className="uk-position-center uk-panel">
                    <h1>New York</h1>
                  </div>
                </div>
              </li>
              <li>
                <div className="uk-panel">
                  <img
                    src="cityImg.jpg"
                    width="400"
                    height="600"
                    alt=""
                    className="uk-border-rounded uk-card uk-box-shadow-small"
                  />
                  <div className="uk-position-left uk-panel uk-margin-small-left uk-margin-small-top">
                    <span uk-icon="icon: heart; ratio: 1.5"></span>
                  </div>
                  <div className="uk-position-center uk-panel">
                    <h1>Wyomning</h1>
                  </div>
                </div>
              </li>
              <li>
                <div className="uk-panel uk-border-pill">
                  <img
                    src="cityImg.jpg"
                    width="400"
                    height="600"
                    alt=""
                    className="uk-border-rounded uk-card uk-box-shadow-small"
                  />
                  <div className="uk-position-left uk-panel uk-margin-small-left uk-margin-small-top">
                    <span
                      className={
                        "uk-icon-button uk-margin-small-left" + styles.loveIcon
                      }
                      uk-icon="icon: heart; ratio: 1.5"
                    ></span>
                  </div>
                  <div className="uk-position-center uk-panel">
                    <h1>NorthernBurg</h1>
                  </div>
                </div>
              </li>
              <li>
                <div className="uk-panel">
                  <img src="cityImg.jpg" width="400" height="600" alt="" />
                  <div className="uk-position-left uk-panel">
                    kujugwjkghdfkjwq
                  </div>
                </div>
              </li>
              <li>
                <div className="uk-panel">
                  <img src="cityImg.jpg" width="400" height="600" alt="" />
                  <div className="uk-position-left uk-panel">
                    kujugwjkghdfkjwq
                  </div>
                </div>
              </li>
              <li>
                <div className="uk-panel">
                  <img src="cityImg.jpg" width="400" height="600" alt="" />
                  <div className="uk-position-left uk-panel">
                    <a href="" uk-icon="heart"></a>
                  </div>
                </div>
              </li>
            </ul>
  
            <a
              className="uk-position-center-left uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-previous
              uk-slider-item="previous"
            ></a>
            <a
              className="uk-position-center-right uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-next
              uk-slider-item="next"
            ></a>
          </div>
        </div>
      </section>
    );
  }

  export default Cities;