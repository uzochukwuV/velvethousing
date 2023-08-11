import Link from "next/link";
import styles from "./signup.module.css";
import "uikit/dist/js/uikit-icons.js";
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit.js"
import "bootstrap/dist/css/bootstrap.min.css"
import bg  from "../../../public/images/img-bg-2.jpg"

export default function SignUp() {
    return (
        <section>
            <div className={styles.siteWrap + " d-md-flex align-items-stretch"}>
        <div className={styles.bgImg + " w-full h-48 bg-no-repeat bg-cover"} style={{backgroundImage: "url("+ bg.src +  ")"}}></div>
        <div className={styles.formWrap}>
            <div className={styles.formInner}>
                <h1 className={styles.title}>Sign up</h1>
                <p className="caption mb-4">Create your account in seconds.</p>

                <form action="#" className="pt-3">

                    <div className={styles.formFloating}>
                        <input type="text" className={"form-control " + styles.formControl} id="name" placeholder="Full Name"/>
                        <label for="name">Full Name</label>
                    </div>

                    <div className={styles.formFloating}>
                        <input type="email" className={"form-control " + styles.formControl} id="email" placeholder="info@example.com" />
                        <label for="email">Email Address</label>
                    </div>

                    <div className={styles.formFloating}>
                        <span className={"password-show-toggle js-password-show-toggle " + styles.showTog}><span className="uil"></span></span>
                        <input type="password" className={"form-control " + styles.formControl} id="password" placeholder="Password" /> 
                        <label for="password">Password</label>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div className={styles.formCheck }>
                            <input type="checkbox" className={"form-check-input " + styles.formCheckInp} id="remember" />
                            <label for="remember" className="form-check-label">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                        </div>
                    </div>

                    <div className="d-grid mb-4">
                        <button type="submit" className={"btn btn-primary " + styles.formWrapBtn}>Create an account</button>
                    </div>

                    <div className="mb-2">Already a member? <a href="index.html">Log in</a></div>

                    <div className={styles.socialWrap}>
                    <h4 className={"mb-4 " + styles.socialWraph4}><span className={styles.socialWraph4Span}>or continue with</span></h4>
                    <ul className="list-unstyled social-account d-flex justify-content-between">
                            <li className={styles.socailLi}><a className={styles.socialA} href="#"><img src="/images/icon-google.svg" alt="Google logo" /></a></li>
                            <li className={styles.socailLi}><a className={styles.socialA} href="#"><img src="/images/icon-facebook.svg" alt="Facebook logo" /></a></li>
                            <li className={styles.socailLi}><a className={styles.socialA} href="#"><img src="/images/icon-apple.svg" alt="Apple logo" /></a></li>
                            <li className={styles.socailLi}><a className={styles.socialA} href="#"><img src="/images/icon-twitter.svg" alt="Twitter logo" /></a></li>
                        </ul>
                    </div>

                </form>
            </div>
        </div>
    </div>

        </section>
    )
}