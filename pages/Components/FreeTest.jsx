import styles from '../../styles/allStyle/freeTest.module.css'
import { MdVerified } from 'react-icons/md';
import Image from 'next/image';
const FreeTest = () => {
    return (
        <>
            <div className={styles.crack__main__div}>
                <div className={styles.crack__main__div__container}>
                    <div className={styles.freeTest__text}>
                        <h3>Take a test for free and win up to  50% scholarship</h3>

                        <div className={styles.freeTest__text__time} class="d-flex gap-3 align-item-center">
                            <span> <MdVerified style={{ color: "green", marginRight: "0.4rem" }} />Just 15 minutes</span>
                            <span> <MdVerified style={{ color: "green", marginRight: "0.4rem" }} />15 quick questions</span>
                        </div>
                        <button>Attempt test now</button>
                    </div>
                    <div className={styles.freeTest__image}>
                        <Image
                            src="/images/cup.svg"
                            alt=""
                            height={250}
                            width={190}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreeTest