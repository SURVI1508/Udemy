import styles from '../../styles/allStyle/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className={styles.crack__main__div}>
            <div className={styles.crack__main__div__container}>

                <div className={styles.footer__container__left}>
                    <div>
                        <Image
                            src="/images/logo2.svg"
                            alt="UNACDMY"
                            height={26.23}
                            width={176}
                        />
                        <p class="mt-5">Unacademy is democratising education, making it accessible to all. Join the revolution, learn on India's largest learning platform.</p>
                    </div>
                    <div class="d-flex gap-3">

                        <Image
                            src="/images/playstore.png"
                            alt="playstore"
                            height={48}
                            width={158}
                        />
                        <Image
                            src="/images/appstore.png"
                            alt="playstore"
                            height={48}
                            width={158}
                        />

                    </div>
                    <div>
                        <h5>Reach out to us</h5>
                        <p>Get your questions answered about learning with Unacademy.</p>
                        <h5>Call +91 6204510914</h5>
                    </div>
                </div>

                <div className={styles.footer__container__right}>
                    <div className={styles.footer__container__right__top}>
                        <div className={styles.footer__container__right__top__one}>
                            <h5>Company</h5>
                            <Link href="/" className={styles.footer__link}>About Us</Link>
                            <Link href="/" className={styles.footer__link}>Shikshodaya</Link>
                            <Link href="/" className={styles.footer__link}>Careers</Link>
                            <Link href="/" className={styles.footer__link}>Blogs</Link>
                            <Link href="/" className={styles.footer__link}>Privacy policy</Link>
                            <Link href="/" className={styles.footer__link}>Terms and conditions</Link>
                        </div>
                        <div className={styles.footer__container__right__top__one}>
                            <h5>Help & support</h5>
                            <Link href="/" className={styles.footer__link}>User Guidelines</Link>
                            <Link href="/" className={styles.footer__link}>Site Map</Link>
                            <Link href="/" className={styles.footer__link}>Refund Policy</Link>
                            <Link href="/" className={styles.footer__link}>Takedown Policy</Link>
                            <Link href="/" className={styles.footer__link}>Grievance Redressal</Link>
                        </div>
                        <div className={styles.footer__container__right__top__one}>
                            <h5>Company</h5>
                            <Link href="/" className={styles.footer__link}>Learner app</Link>
                            <Link href="/" className={styles.footer__link}>Educator app</Link>
                            <Link href="/" className={styles.footer__link}>Parent app</Link>
                        </div>
                    </div>

                    <div className={styles.footer__container__right__top}>
                        <div className={styles.footer__container__right__top__one}>
                            <h5>Popular goals</h5>
                            <Link href="/" className={styles.footer__link}>About Us</Link>
                            <Link href="/" className={styles.footer__link}>Shikshodaya</Link>
                            <Link href="/" className={styles.footer__link}>Careers</Link>
                            <Link href="/" className={styles.footer__link}>Blogs</Link>
                            <Link href="/" className={styles.footer__link}>Privacy policy</Link>
                            <Link href="/" className={styles.footer__link}>Terms and conditions</Link>
                        </div>
                        <div className={styles.footer__container__right__top__one}>
                            <h5>Unacademy Centre</h5>
                            <Link href="/" className={styles.footer__link}>User Guidelines</Link>
                            <Link href="/" className={styles.footer__link}>Site Map</Link>
                            <Link href="/" className={styles.footer__link}>Refund Policy</Link>
                            <Link href="/" className={styles.footer__link}>Takedown Policy</Link>
                            <Link href="/" className={styles.footer__link}>Grievance Redressal</Link>
                        </div>
                        <div className={styles.footer__container__right__top__one}>
                            <h5>Study material</h5>
                            <Link href="/" className={styles.footer__link}>Learner app</Link>
                            <Link href="/" className={styles.footer__link}>Educator app</Link>
                            <Link href="/" className={styles.footer__link}>Parent app</Link>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>

    )
}

export default Footer