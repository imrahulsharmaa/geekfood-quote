import styles from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_logo}>
                <img src="https://flowbite.com/docs/images/logo.svg" />
                <span className={styles.footer_name}>GeekFoods</span>
            </div>

            <div className={styles.footer_links}>
                <a className={styles.f_link} href="#">About</a>
                <a className={styles.f_link} href="#">Careers</a>
                <a className={styles.f_link} href="#">History</a>
                <a className={styles.f_link} href="#">Services</a>
                <a className={styles.f_link} href="#">Projects</a>
                <a className={styles.f_link} href="#">Blog</a>
            </div>

            <div className={styles.footer_emoji}>
                <span><FontAwesomeIcon className={styles.facebook} icon={faFacebook} /></span>
                <span><FontAwesomeIcon className={styles.instagram} icon={faInstagram} /></span>
                <span><FontAwesomeIcon className={styles.twitter} icon={faTwitter} /></span>
                <span><FontAwesomeIcon className={styles.github} icon={faGithub} /></span>
                <span><FontAwesomeIcon className={styles.ball} icon={faBasketball} /></span>
            </div>

        </div>
    )
}

export default Footer;