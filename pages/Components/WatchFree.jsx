import styles from '../../styles/allStyle/watchFree.module.css'
import { MdVerified } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import Image from 'next/image';
const WatchFree = () => {
    return (
        <div className={styles.crack__main__div}>
            <div className={styles.crack__main__div__container}>
                <div className={styles.freeTest__text}>
                    <h3>Watch free online classes</h3>
                    <div className={styles.freeTest__text__time} class="d-flex gap-2 align-item-center">
                        <span> <MdVerified style={{ color: "green", marginRight: "0.4rem" }} />Chat live with educators</span>
                        <span> <MdVerified style={{ color: "green", marginRight: "0.4rem" }} />Attempt interactive polls</span>
                        <span> <MdVerified style={{ color: "green", marginRight: "0.4rem" }} />Get your doubts cleared</span>
                    </div>
                </div>
                <div className={styles.freeTest__image} >
                    <div className={styles.freeTest__image__avtart}>
                    <Image
                    className={styles.crack__main__div__vdo__play__image}
                        src="/images/M2.webp"
                        alt=""
                        width={55}
                        height={55}
                    />
                    </div>
                    <h5>116.5K learners</h5>
                    <p>watched a class today</p>
                </div>
            </div>


            <div className={styles.crack__main__div__vdo_container}>
                <div className={styles.crack__main__div__vdo__play}>
                    <Image
                    className={styles.crack__main__div__vdo__play__image}
                        src="/images/M2.webp"
                        alt=""
                        width={561}
                        height={316}
                    />
                </div>
                <div className={styles.crack__main__div__vdo__info}>

                    <div className={styles.crack__main__div__vdo__lang}>
                        <span style={{ background: "white", fontWeight: "bold", borderRadius: "0.2rem", fontSize: "10px", padding: "0.3rem" }}>Hindi</span>
                        <span style={{ color: "#8873FF", fontWeight: "700", fontSize: "12px", marginLeft: "0.4rem" }}>CRASH COURSES</span>
                    </div>

                    <div className={styles.crack__main__div__vdo__chapter__name}>
                        <h3>Chemistry in everyday life: Full chapter in 45 minutes 4 marks for JEE</h3>
                        <span style={{ fontWeight: "400", fontSize: "14px" }}>Sakshi Ganotra</span>
                        <p style={{ color:"#7A8B94",fontWeight: "400", fontSize: "14px" }}>Ended on Jan 25</p>
                    </div>

                    <p style={{ color:"#7A8B94",fontWeight: "400", fontSize: "16px" }}>7.2K learners watched</p>

                    <div className={styles.crack__main__next__btn} class="d-flex gap-2">
                        <div className={styles.crack__main__next__btn__btn}><IoIosArrowBack /></div>
                        <div className={styles.crack__main__next__btn__btn}><IoIosArrowForward /></div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default WatchFree