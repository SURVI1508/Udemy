import styles from '../../styles/allStyle/onlinePre.module.css'
import Image from 'next/image'
import { MdVerified } from 'react-icons/md';

const OnlinePrePeration = () => {
    return (
        <>
            <div className={styles.crack__main__div}>
                <div className={styles.crack__main__div__container}>
                    <div>
                        <div className={styles.freeTest__text}>
                            <h3>Online preparation like never before</h3>
                            <span> <MdVerified style={{ color: "rgb(8, 111, 255)", marginRight: "0.4rem" }} />Interactive live classes</span>
                            <span> <MdVerified style={{ color: "rgb(8, 111, 255)", marginRight: "0.4rem" }} />Mock tests and practice questions</span>
                            <span> <MdVerified style={{ color: "rgb(8, 111, 255)", marginRight: "0.4rem" }} />High-quality notes</span>
                            <span> <MdVerified style={{ color: "rgb(8, 111, 255)", marginRight: "0.4rem" }} />Doubt solving</span>
                        </div>
                        <div class="d-flex gap-3 mt-5">

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
                    </div>
                    <div>
                        <Image
                        className={styles.mobileApp__img}
                            src="/images/mobileApp.svg"
                            alt=""
                            height={402}
                            width={369}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnlinePrePeration