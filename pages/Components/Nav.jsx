import Link from 'next/link'
import styles from '../../styles/allStyle/nav.module.css'
import { HiMenuAlt1 } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';
import TopSlide from './TopSlide'
import { FiPhoneCall } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaGift } from 'react-icons/fa';


const Nav = () => {

    const open = () => {
        const drawer = document.getElementById("drawer")
        drawer.style.width = "230px"
    }
    return (
        <>
            <div className={styles.nav__div}>
                <div className={styles.nav__div__container}>

                    <div className={styles.nav__div__top__container}>

                        <div className={styles.nav__logo}>
                            <Image
                                className={styles.nav__logo__logo}
                                src="./images/logoU.svg"
                                alt=""
                                height={25}
                                width={25}
                            />
                            <span style={{ fontSize: "16px", fontWeight: "600", color: "#3C4852" }}>IIT JEE</span>
                            <h5><IoIosArrowDown /></h5>
                        </div>

                        <div  class="d-flex gap-3 align-item-center">
                            <div className={styles.nav__input}>
                                <input type="text" placeholder='🔍 Search cources,educators,series' />
                            </div>

                            <div className={styles.nav__call}>
                                <div className={styles.nav__call__icon}>
                                    <h5 style={{ color: "#3C4852" }}><FiPhoneCall /></h5>
                                </div>
                                <div>
                                    <span style={{ color: "gray", fontSize: "13px" }}>Talk to our expert</span><br /><span style={{ color: "#3C4852", fontWeight: "600", fontSize: "14px" }}>+91 6201442010</span>
                                </div>
                            </div>

                            <div className={styles.nav__gift}>
                                <h5><FaGift /></h5>
                            </div>

                            <div className={styles.nav__btns}>
                                <button style={{ background: "none", color: "rgb(60, 72, 82)" }}>Log in</button>
                                <button>Join for free</button>
                            </div>
                        </div>

                    </div>
                    <div className={styles.nav__div__bottom__container}>
                        <div className={styles.nav__div__bottom__container__navLink}>
                            <Link href="/" className={styles.nav__link}>Get Started</Link>
                            <Link href="/" className={styles.nav__link}>Educators</Link>
                            <Link href="/" className={styles.nav__link}>Batch</Link>
                            <Link href="/" className={styles.nav__link}>Store</Link>
                            <Link href="/" className={styles.nav__link}>Subscription Plane</Link>
                            <Link href="/" className={styles.nav__link}>Store</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav