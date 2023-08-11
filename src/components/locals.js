import styles from "../app/page.module.css"

function LocalsSay() {
    return (
      <section>
        <h3 className="uk-text-center uk-padding">What People Say</h3>
        <section className="uk-flex uk-flex-between">
          <article className="uk-comment uk-comment-primary" role="comment">
            <header className="uk-comment-header">
              <div className="uk-grid-medium uk-flex-middle" uk-grid>
                <div className="uk-width-auto">
                  <img
                    className="uk-comment-avatar"
                    src="light.svg"
                    width="80"
                    height="80"
                    alt=""
                  />
                </div>
                <div className="uk-width-expand">
                  <h4 className="uk-comment-title uk-margin-remove">
                    <a className="uk-link-reset" href="#">
                      Author
                    </a>
                  </h4>
                  <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                    <li>
                      <a href="#">12 days ago</a>
                    </li>
                    <li>
                      <a href="#">Reply</a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
            <div className={"uk-comment-body " + styles.colorlight}>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </article>
          <article className="uk-comment uk-comment-primary" role="comment">
            <header className="uk-comment-header">
              <div className="uk-grid-medium uk-flex-middle" uk-grid>
                <div className="uk-width-auto">
                  <img
                    className="uk-comment-avatar"
                    src="light.svg"
                    width="80"
                    height="80"
                    alt=""
                  />
                </div>
                <div className="uk-width-expand">
                  <h4 className="uk-comment-title uk-margin-remove">
                    <a className="uk-link-reset" href="#">
                      Author
                    </a>
                  </h4>
                  <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                    <li>
                      <a href="#">12 days ago</a>
                    </li>
                    <li>
                      <a href="#">Reply</a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
            <div className="uk-comment-body">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </article>
        </section>
      </section>
    );
  }

export default LocalsSay;