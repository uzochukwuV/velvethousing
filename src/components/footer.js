import styles from "../app/page.module.css"
function Footer() {
    return (
      <footer>
        <div
          className={
            styles.footer +
            " uk-child-width-expand@s uk-column-1-4 uk-container uk-section "
          }
          uk-grid
        >
          <div>
            <h4>Muted</h4>
            <ul className="uk-list uk-list-disc uk-list-muted">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
  
          <div>
            <h4>Emphasis</h4>
            <ul className="uk-list uk-list-disc uk-list-emphasis">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
  
          <div>
            <h4>Primary</h4>
            <ul className="uk-list uk-list-disc uk-list-primary">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
  
          <div>
            <h4>Secondary</h4>
            <ul className="uk-list uk-list-disc uk-list-secondary">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

  
  export default Footer;